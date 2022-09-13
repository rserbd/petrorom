import { Controller, Delete, Param } from '@nestjs/common';
import { OffersService } from '../../../services/offers/offers.service';
import { Offer } from '../../../entities/offer.entity';

@Controller('api/delete-offer')
export class DeleteOfferController {
    constructor(private offersService: OffersService) {}

    // @Delete(':id')
    // async deleteOfferById(@Param() id: number): Promise<Offer> {
    //     return await this.offersService.deleteOffer(id);
    // }
}