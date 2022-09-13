import { Controller, Get, Param } from '@nestjs/common';
import { OffersService } from '../../../services/offers/offers.service';
import { Offer } from '../../../entities/offer.entity';

@Controller('api/get-offer')
export class GetOfferController {
    constructor(private offersService: OffersService) {}

    // @Get(':id')
    // async getOfferById(@Param() id: number): Promise<Offer> {
    //     return await this.offersService.getOneById(id);
    // }
}
