import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../common/current-user.decorator';
import { JwtAuthGuard } from '../common/jwt.guard';
import { ok } from '../common/response.dto';
import { CreateGoalDto } from './dto/create-goal.dto';
import { GoalsService } from './goals.service';

@ApiTags('goals')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('goals')
export class GoalsController {
  constructor(private goalsService: GoalsService) {}

  @Get()
  async list(@CurrentUser() user: { userId: number }) {
    return ok(await this.goalsService.list(user.userId));
  }

  @Post()
  async create(@CurrentUser() user: { userId: number }, @Body() dto: CreateGoalDto) {
    const data = await this.goalsService.create(user.userId, dto);
    return ok(data, 'Goal created');
  }

  @Put(':id')
  async update(
    @CurrentUser() user: { userId: number },
    @Param('id') id: string,
    @Body() body: { saved_amount: number },
  ) {
    const data = await this.goalsService.update(user.userId, +id, body.saved_amount);
    return ok(data, 'Goal updated');
  }

  @Delete(':id')
  async remove(@CurrentUser() user: { userId: number }, @Param('id') id: string) {
    const data = await this.goalsService.remove(user.userId, +id);
    return ok(data, 'Goal deleted');
  }
}
