import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { StatusEnum } from '../../../helpers/status.enum';
import { UserEntity } from '../../users/entities/users.entity';

@Entity('campaigns')
export class CampaignEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ default: 0 })
  goal: number;

  @Column({ default: 0 })
  balance: number;

  @Column({ type: 'enum', enum: StatusEnum, default: StatusEnum.Active })
  status: StatusEnum;

  @OneToMany(() => UserEntity, (users) => users.campaign, {
    nullable: true,
    onUpdate: 'CASCADE',
  })
  users?: UserEntity[];

  @RelationId((camp: CampaignEntity) => camp.users)
  usersIds?: string[];
}
