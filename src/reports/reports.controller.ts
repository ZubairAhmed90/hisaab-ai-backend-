import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../common/current-user.decorator';
import { JwtAuthGuard } from '../common/jwt.guard';
import { ok } from '../common/response.dto';
import { ReportsService } from './reports.service';

@ApiTags('reports')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('reports')
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  // Get monthly financial report with grade and AI summary
  @Get('monthly')
  async monthly(
    @CurrentUser() user: { userId: number },
    @Query('month') month?: string,
  ) {
    const data = await this.reportsService.getMonthly(user.userId, month);
    return ok(data);
  }
}
