import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../common/current-user.decorator';
import { JwtAuthGuard } from '../common/jwt.guard';
import { ok } from '../common/response.dto';
import { MirrorService } from './mirror.service';

@ApiTags('mirror')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('mirror')
export class MirrorController {
  constructor(private mirrorService: MirrorService) {}

  // Show what overspend would be worth if invested
  @Get()
  async getMirror(
    @CurrentUser() user: { userId: number },
    @Query('period') period = '1m',
  ) {
    const data = await this.mirrorService.getMirror(user.userId, period);
    return ok(data);
  }
}
