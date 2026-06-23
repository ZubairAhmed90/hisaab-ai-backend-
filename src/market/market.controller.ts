import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../common/jwt.guard';
import { ok } from '../common/response.dto';
import { MarketService } from './market.service';

@ApiTags('market')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('market')
export class MarketController {
  constructor(private marketService: MarketService) {}

  @Get('all')
  async all() {
    return ok(await this.marketService.getAll());
  }

  @Get('catalog')
  async catalog() {
    return ok(this.marketService.getCatalog());
  }

  @Get('stocks')
  async stocks() {
    return ok(await this.marketService.getByType('stock'));
  }

  @Get('gold')
  async gold() {
    return ok((await this.marketService.getByType('gold'))[0] || null);
  }

  @Get('tbill')
  async tbill() {
    return ok((await this.marketService.getByType('tbill'))[0] || null);
  }
}
