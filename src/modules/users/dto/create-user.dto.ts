import { IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateUserDto {
  @IsString()
  nickname: string;

  @IsNumber()
  amount: number;

  @IsUUID()
  campaignId: string;
}
