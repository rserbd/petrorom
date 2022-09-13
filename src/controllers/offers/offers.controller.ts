import { Body, Param, Controller, Request, Post, Get, Patch, Put, UseGuards } from '@nestjs/common';
import { OffersService } from '../../services/offers/offers.service';
import { Offer } from '../../entities/offer.entity';
import { JwtAuthGuard } from '../../services/users/jwt-auth.guard';

@Controller('api/offers/')
export class OffersController {
    constructor(private offersService: OffersService) {}

    // Create new unconfirmed offer with / without products

    @UseGuards(JwtAuthGuard)
    @Post('create-offer')
    async postNewOffer(@Request() req, @Body() offer: Offer): Promise<Offer> {
        return await this.offersService.createOffer(req.user, offer);
    }

    // Get all unconfirmed offers

    @UseGuards(JwtAuthGuard)
    @Get('get-unconfirmed-offers')
    async getUnconfirmedOffers(@Request() req): Promise<Offer[]> {
        return await this.offersService.getUnconfirmedOffers(req.user);
    }

    // Confirm offer

    @UseGuards(JwtAuthGuard)
    @Patch('confirm-offer/:id')
    async confirmOffer(@Request() req, @Param('id') id: string): Promise<Offer> {
        return await this.offersService.confirmOffer(req.user, id);
    }

    @UseGuards(JwtAuthGuard)
    @Get('get-offer/:id')
    async getOfferById(@Param('id') id: string): Promise<Offer> {
        return await this.offersService.getOneById(id);
    }

    // Get all confirmed offers

    @UseGuards(JwtAuthGuard)
    @Get('get-confirmed-offers')
    async getConfirmedOffers(): Promise<Offer[]> {
        return await this.offersService.getConfirmedOffers();
    }

    // Edit unconfirmed offers

    @UseGuards(JwtAuthGuard)
    @Patch('edit-offer/:id')
    async editOffer(@Request() req, @Param('id') id: string, @Body() offer: Offer): Promise<Offer> {
        return await this.offersService.editUnconfirmedOffer(req.user, id, offer);
    }

}