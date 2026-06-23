import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNumber, Min } from 'class-validator';

export class TransferBalanceDto {
  @ApiProperty({ example: 5000 })
  @IsNumber()
  @Min(1)
  amount: number;

  @ApiProperty({ enum: ['to_account', 'to_wallet'] })
  @IsIn(['to_account', 'to_wallet'])
  direction: 'to_account' | 'to_wallet';
}
