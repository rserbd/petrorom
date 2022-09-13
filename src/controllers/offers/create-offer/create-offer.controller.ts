import { Body, Controller, Request, Post, UseGuards } from '@nestjs/common';
import { OffersService } from '../../../services/offers/offers.service';
import { Offer } from '../../../entities/offer.entity';
import { JwtAuthGuard } from '../../../services/users/jwt-auth.guard';

@Controller('api/create-offer')
export class CreateOfferController {
    constructor(private offersService: OffersService) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    async postNewOffer(@Request() req, @Body() offer: Offer): Promise<Offer> {
        return await this.offersService.createOffer(req.user, offer);
    }
}
