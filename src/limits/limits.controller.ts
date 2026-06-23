import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../common/current-user.decorator';
import { JwtAuthGuard } from '../common/jwt.guard';
import { ok } from '../common/response.dto';
import { CreateLimitDto } from './dto/create-limit.dto';
import { LinkPartnerDto } from './dto/link-partner.dto';
import { LimitsService } from './limits.service';

@ApiTags('limits')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('limits')
export class LimitsController {
  constructor(private limitsService: LimitsService) {}

  @Get()
  async listSet(@CurrentUser() user: { userId: number }) {
    return ok(await this.limitsService.listSet(user.userId));
  }

  @Get('mine')
  async listMine(@CurrentUser() user: { userId: number }) {
    return ok(await this.limitsService.listMine(user.userId));
  }

  @Get('partner')
  async partner(@CurrentUser() user: { userId: number }) {
    return ok(await this.limitsService.partnerSummary(user.userId));
  }

  @Post()
  async create(@CurrentUser() user: { userId: number }, @Body() dto: CreateLimitDto) {
    return ok(await this.limitsService.create(user.userId, dto), 'Limit created');
  }

  @Put(':id')
  async update(
    @CurrentUser() user: { userId: number },
    @Param('id') id: string,
    @Body() dto: Partial<CreateLimitDto>,
  ) {
    return ok(await this.limitsService.update(user.userId, +id, dto), 'Limit updated');
  }

  @Delete(':id')
  async remove(@CurrentUser() user: { userId: number }, @Param('id') id: string) {
    return ok(await this.limitsService.remove(user.userId, +id), 'Limit deleted');
  }

  @Post('link-partner')
  async linkPartner(@CurrentUser() user: { userId: number }, @Body() dto: LinkPartnerDto) {
    return ok(await this.limitsService.linkPartner(user.userId, dto.email), 'Partner linked');
  }

  @Post('unlink-partner')
  async unlinkPartner(@CurrentUser() user: { userId: number }) {
    return ok(await this.limitsService.unlinkPartner(user.userId), 'Partner unlinked');
  }
}
