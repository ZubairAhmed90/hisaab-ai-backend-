import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../common/current-user.decorator';
import { JwtAuthGuard } from '../common/jwt.guard';
import { ok } from '../common/response.dto';
import { AiService } from './ai.service';
import { ChatDto } from './dto/chat.dto';

@ApiTags('ai')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('ai')
export class AiController {
  constructor(private aiService: AiService) {}

  // Chat with the AI financial advisor
  @Post('chat')
  async chat(@CurrentUser() user: { userId: number }, @Body() dto: ChatDto) {
    const data = await this.aiService.chat(user.userId, dto.message, dto.language);
    return ok(data);
  }

  // Get 3 personalized saving tips
  @Get('tips')
  async tips(
    @CurrentUser() user: { userId: number },
    @Query('language') language = 'en',
  ) {
    const data = await this.aiService.getTips(user.userId, language);
    return ok(data);
  }
}
