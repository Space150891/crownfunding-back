import { IsEnum, IsNumber, IsString, IsOptional } from 'class-validator';
import { StatusEnum } from '../../../helpers/status.enum';

export class CreateCampaignDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsNumber()
  goal: number;

  @IsEnum(StatusEnum)
  @IsOptional()
  status: StatusEnum;
}
