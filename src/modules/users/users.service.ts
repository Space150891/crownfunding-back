import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StatusEnum } from '../../helpers/status.enum';
import { CampaignEntity } from '../campaigns/entities/campaigns.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepo: Repository<UserEntity>,
    @InjectRepository(CampaignEntity)
    private campRepo: Repository<CampaignEntity>,
  ) {}

  async createUser(dto: CreateUserDto) {
    try {
      const { campaignId, amount, nickname } = dto;
      const camp = await this.campRepo.findOne({ where: { id: campaignId } });
      if (nickname === 'Donator') {
        camp.status = StatusEnum.Fraud;
        await this.usersRepo
          .createQueryBuilder()
          .update()
          .set({ status: StatusEnum.Fraud })
          .where({ campaign: { id: campaignId } })
          .execute();
        await this.campRepo.save(camp);
        return;
      }
      if (dto.campaignId) {
        const { goal, balance } = camp;
        camp.balance = balance + amount;
        if (goal <= balance + amount) {
          camp.status = StatusEnum.Successful;
        }
        await this.campRepo.save(camp);

        // @ts-ignore
        dto.campaign = camp;
      }
      return await this.usersRepo.save(dto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
