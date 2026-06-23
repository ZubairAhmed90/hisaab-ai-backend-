import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class UpdateBudgetDto {
  @ApiProperty()
  @IsNumber()
  monthly_limit: number;
}
