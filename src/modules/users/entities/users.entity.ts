import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { StatusEnum } from '../../../helpers/status.enum';
import { CampaignEntity } from '../../campaigns/entities/campaigns.entity';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  nickname?: string;

  @Column({ default: 0 })
  amount: number;

  @Column({ type: 'enum', enum: StatusEnum, default: StatusEnum.Active })
  status: StatusEnum;

  @ManyToOne(() => CampaignEntity, {
    nullable: true,
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  })
  campaign?: CampaignEntity;

  @RelationId((user: UserEntity) => user.campaign)
  campaignId?: string;
}
