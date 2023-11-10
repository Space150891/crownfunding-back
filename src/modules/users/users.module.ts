import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserEntity } from './entities/users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CampaignEntity } from '../campaigns/entities/campaigns.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, CampaignEntity])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
