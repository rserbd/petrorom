import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { OffersService } from '../../../services/offers/offers.service';
import { Offer } from '../../../entities/offer.entity';
import { JwtAuthGuard } from '../../../services/users/jwt-auth.guard';

@Controller('api/get-offers')
export class GetOffersController {
    constructor(private offersService: OffersService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getOffers(): Promise<Offer[]> {
        return await this.offersService.getAll();
    }
}
