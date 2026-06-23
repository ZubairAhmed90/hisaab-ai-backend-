import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../common/current-user.decorator';
import { JwtAuthGuard } from '../common/jwt.guard';
import { ok } from '../common/response.dto';
import { BudgetsService } from './budgets.service';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';

@ApiTags('budgets')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('budgets')
export class BudgetsController {
  constructor(private budgetsService: BudgetsService) {}

  @Get()
  async list(@CurrentUser() user: { userId: number }) {
    return ok(await this.budgetsService.list(user.userId));
  }

  @Post()
  async create(
    @CurrentUser() user: { userId: number },
    @Body() dto: CreateBudgetDto,
  ) {
    const data = await this.budgetsService.create(user.userId, dto);
    return ok(data, 'Budget created');
  }

  @Put(':id')
  async update(
    @CurrentUser() user: { userId: number },
    @Param('id') id: string,
    @Body() dto: UpdateBudgetDto,
  ) {
    const data = await this.budgetsService.update(user.userId, +id, dto);
    return ok(data, 'Budget updated');
  }

  @Delete(':id')
  async remove(
    @CurrentUser() user: { userId: number },
    @Param('id') id: string,
  ) {
    const data = await this.budgetsService.remove(user.userId, +id);
    return ok(data, 'Budget deleted');
  }
}
