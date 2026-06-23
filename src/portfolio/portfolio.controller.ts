import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../common/current-user.decorator';
import { JwtAuthGuard } from '../common/jwt.guard';
import { ok } from '../common/response.dto';
import { TradeStockDto } from './dto/trade-stock.dto';
import { TransferBalanceDto } from './dto/transfer-balance.dto';
import { PortfolioService } from './portfolio.service';

@ApiTags('portfolio')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('portfolio')
export class PortfolioController {
  constructor(private portfolioService: PortfolioService) {}

  @Get()
  async getPortfolio(@CurrentUser() user: { userId: number }) {
    return ok(await this.portfolioService.getPortfolio(user.userId));
  }

  @Get('wallet')
  async getWallet(@CurrentUser() user: { userId: number }) {
    return ok(await this.portfolioService.getWallet(user.userId));
  }

  @Get('trades')
  async getTrades(@CurrentUser() user: { userId: number }) {
    const trades = await this.portfolioService.getTrades(user.userId);
    return ok(trades);
  }

  @Post('buy')
  async buy(@CurrentUser() user: { userId: number }, @Body() dto: TradeStockDto) {
    return ok(
      await this.portfolioService.buyStock(user.userId, dto.ticker, dto.quantity),
      'Stock purchased',
    );
  }

  @Post('sell')
  async sell(@CurrentUser() user: { userId: number }, @Body() dto: TradeStockDto) {
    return ok(
      await this.portfolioService.sellStock(user.userId, dto.ticker, dto.quantity),
      'Stock sold — funds added to wallet',
    );
  }

  @Post('transfer')
  async transfer(@CurrentUser() user: { userId: number }, @Body() dto: TransferBalanceDto) {
    const label =
      dto.direction === 'to_account'
        ? 'Funds moved to your account'
        : 'Funds moved to your wallet';
    return ok(
      await this.portfolioService.transferBalance(user.userId, dto.amount, dto.direction),
      label,
    );
  }
}
