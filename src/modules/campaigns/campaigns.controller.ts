import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CampaignsService } from './campaigns.service';
import { CreateCampaignDto } from './dto/create-campaigns.dto';

@Controller('campaigns')
export class CampaignsController {
  constructor(private campaignsService: CampaignsService) {}

  @Post('')
  createCamp(@Body() dto: CreateCampaignDto) {
    return this.campaignsService.createCamp(dto);
  }

  @Get('all')
  getAllCamps() {
    return this.campaignsService.getAllCamps();
  }

  @Get(':id')
  getCampById(@Param('id') id: string) {
    return this.campaignsService.getCampById(id);
  }
}
