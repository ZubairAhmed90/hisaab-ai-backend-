import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../common/current-user.decorator';
import { JwtAuthGuard } from '../common/jwt.guard';
import { ok } from '../common/response.dto';
import { CreditWalletDto } from '../portfolio/dto/trade-stock.dto';
import { AdminGuard } from './admin.guard';
import { AdminService } from './admin.service';
import { MarketService } from '../market/market.service';

@ApiTags('admin')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, AdminGuard)
@Controller('admin')
export class AdminController {
  constructor(
    private adminService: AdminService,
    private marketService: MarketService,
  ) {}

  @Get('users')
  async listUsers() {
    return ok(await this.adminService.listUsers());
  }

  @Post('users/:id/credit')
  async creditWallet(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: CreditWalletDto,
  ) {
    return ok(
      await this.adminService.creditWallet(id, dto.amount, dto.note),
      'Wallet credited',
    );
  }

  @Post('market/tick')
  async tickMarket() {
    await this.marketService.simulatePrices();
    return ok({ ticked: true }, 'Market prices updated');
  }

  @Get('me')
  async adminCheck(@CurrentUser() user: { userId: number }) {
    return ok({ userId: user.userId, is_admin: true });
  }
}
