import { IsNumber, IsOptional, IsPositive, IsString, Min } from 'class-validator';

export class TradeStockDto {
  @IsString()
  ticker: string;

  @IsNumber()
  @Min(1)
  quantity: number;
}

export class CreditWalletDto {
  @IsNumber()
  @IsPositive()
  amount: number;

  @IsOptional()
  @IsString()
  note?: string;
}
