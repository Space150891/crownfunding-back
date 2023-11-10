import { Module } from '@nestjs/common';
import { CampaignsService } from './campaigns.service';
import { CampaignsController } from './campaigns.controller';
import { CampaignEntity } from './entities/campaigns.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CampaignEntity])],
  providers: [CampaignsService],
  controllers: [CampaignsController],
})
export class CampaignsModule {}
