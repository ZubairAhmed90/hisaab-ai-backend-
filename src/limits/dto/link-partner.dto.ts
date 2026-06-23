import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class LinkPartnerDto {
  @ApiProperty()
  @IsEmail()
  email: string;
}
