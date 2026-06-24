import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../common/current-user.decorator';
import { JwtAuthGuard } from '../common/jwt.guard';
import { ok } from '../common/response.dto';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { TransactionsService } from './transactions.service';

@ApiTags('transactions')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('transactions')
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {}

  @Post()
  async create(
    @CurrentUser() user: { userId: number },
    @Body() dto: CreateTransactionDto,
  ) {
    const data = await this.transactionsService.create(user.userId, dto);
    return ok(data, 'Transaction created');
  }

  @Get()
  async list(
    @CurrentUser() user: { userId: number },
    @Query('page') page = 1,
    @Query('limit') limit = 20,
  ) {
    const data = await this.transactionsService.list(user.userId, +page, +limit);
    return ok(data);
  }

  @Get('summary')
  async summary(
    @CurrentUser() user: { userId: number },
    @Query('month') month?: string,
  ) {
    const data = await this.transactionsService.summary(user.userId, month);
    return ok(data);
  }

  @Post('import-csv')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  async importCsv(
    @CurrentUser() user: { userId: number },
    @UploadedFile() file: { buffer: Buffer },
  ) {
    const data = await this.transactionsService.importCsv(user.userId, file.buffer);
    return ok(data, 'CSV imported');
  }

  @Patch(':id/category')
  async updateCategory(
    @CurrentUser() user: { userId: number },
    @Param('id') id: string,
    @Body() dto: UpdateCategoryDto,
  ) {
    const data = await this.transactionsService.updateCategory(
      user.userId,
      +id,
      dto.category,
    );
    return ok(data, 'Category updated');
  }

  @Delete(':id')
  async remove(
    @CurrentUser() user: { userId: number },
    @Param('id') id: string,
  ) {
    const data = await this.transactionsService.remove(user.userId, +id);
    return ok(data, 'Transaction deleted');
  }
}
