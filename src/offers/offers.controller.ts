import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../common/current-user.decorator';
import { JwtAuthGuard } from '../common/jwt.guard';
import { ok } from '../common/response.dto';
import { OfferFeedbackDto } from './dto/offer-feedback.dto';
import { OffersService } from './offers.service';

@ApiTags('offers')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('offers')
export class OffersController {
  constructor(private offersService: OffersService) {}

  @Get()
  async list(@CurrentUser() user: { userId: number }) {
    return ok(await this.offersService.getTopOffers(user.userId));
  }

  @Post(':id/redeem')
  async redeem(
    @CurrentUser() user: { userId: number },
    @Param('id') id: string,
  ) {
    const data = await this.offersService.redeem(user.userId, +id);
    return ok(data, 'Offer redeemed');
  }

  @Post(':id/feedback')
  async feedback(
    @CurrentUser() user: { userId: number },
    @Param('id') id: string,
    @Body() dto: OfferFeedbackDto,
  ) {
    const data = await this.offersService.feedback(user.userId, +id, dto.rating);
    return ok(data, 'Feedback recorded');
  }
}
