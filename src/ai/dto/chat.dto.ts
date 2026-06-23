import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsString } from 'class-validator';

export class ChatDto {
  @ApiProperty()
  @IsString()
  message: string;

  @ApiProperty({ enum: ['en', 'ur'] })
  @IsIn(['en', 'ur'])
  language: string;
}
