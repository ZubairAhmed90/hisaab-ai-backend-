import { ApiProperty } from '@nestjs/swagger';
import { IsIn } from 'class-validator';

export class OfferFeedbackDto {
  @ApiProperty({ enum: ['relevant', 'not_relevant'] })
  @IsIn(['relevant', 'not_relevant'])
  rating: string;
}
