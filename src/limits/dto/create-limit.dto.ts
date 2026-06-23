import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateLimitDto {
  @ApiProperty()
  @IsString()
  category: string;

  @ApiProperty()
  @IsNumber()
  monthly_limit: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  alert_at_percent?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  is_hard_limit?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  target_user_id?: number;
}
