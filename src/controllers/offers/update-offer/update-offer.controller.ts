import { Body, Controller, Param, Put } from '@nestjs/common';
import { OffersService } from '../../../services/offers/offers.service';
import { Offer } from '../../../entities/offer.entity';

@Controller('api/update-offer')
export class UpdateOfferController {
    constructor(private offersService: OffersService) {}

    // @Put(':id')
    // async updateOfferById(@Param() id: number, @Body() offer: Offer): Promise<Offer> {
    //     return await this.offersService.updateOffer(id, offer);
    // }
}