import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
import { Offer } from '../../entities/offer.entity';
import { Product } from '../../entities/product.entity';
import { UsersService } from '../users/users.service';
let _= require('underscore');

@Injectable()
export class OffersService {
    constructor(@InjectRepository(Offer) private offersRepository: Repository<Offer>, 
        @InjectRepository(Product) private productsRepository: Repository<Product>,
        @InjectRepository(User) private usersRepository: Repository<User>,
        private usersService: UsersService
    ) {}

    // Get all offers

    async getAll(): Promise<Offer[]> {

        // } else {
        //     const confirmedOffers = this.offersRepository.filter( where)
        // }
        return this.offersRepository.find({
            relations: ['products']
        }); // SELECT * from user JOIN products
    }

    // Get offer by id

    async getOneById(id: string): Promise<Offer> {
        try {
            const offer = await this.offersRepository.findOneOrFail({
                where: {
                    id: id
                },
                relations: ['products']
            });
            return offer;
        } catch (err) {
            throw err;
        }
    }

    // Create new offer

    async createOffer(user: User, offer: Offer): Promise<Offer> {
        if(user.role == "seller") {
            
            let newOffer = this.offersRepository.create(offer); // create offer
            let newProducts = this.productsRepository.create(offer.products); // create products from the offer
            
            newOffer = await this.offersRepository.save(newOffer);
            newProducts = await this.productsRepository.save(newProducts);

            newOffer.products = newProducts; //assign products to offer

            let userWithOffer = await this.usersService.getOneById(user.id);
            userWithOffer.offers.push(newOffer);
            
            this.usersRepository.save(userWithOffer); //assign offer to user
            return await this.offersRepository.save(newOffer); 
        }
        
        throw new UnauthorizedException();
    }

    // Update existing offer by id

    async updateOffer(id: string, updatedOffer: Offer): Promise<Offer> {
        const offer = await this.getOneById(id);
        Object.assign(offer, updatedOffer);

        return this.offersRepository.save(offer);
    }

    // Delete offer by id

    async deleteOffer(id: string): Promise<Offer> {
        const offer = await this.getOneById(id);

        return this.offersRepository.remove(offer);
    }
    //-------------
    // Get all unconfirmed offers

    async getUnconfirmedOffers(user: User): Promise<Offer[]> {
        if(user.role == "seller") {
            return this.offersRepository.find({
                where: {
                    isConfirmed: false
                },
                relations: ['products']
            });
        } 

        throw new UnauthorizedException();
    }

    // Confirm existing offer by id

    async confirmOffer(user: User, id: string): Promise<Offer> {
        if(user.role == "seller") {
            let offer = await this.getOneById(id);
            offer.isConfirmed = true;

            return this.offersRepository.save(offer);
        } 

        throw new UnauthorizedException();
    }

    // Get all confirmed offers

    async getConfirmedOffers(): Promise<Offer[]> {
        return this.offersRepository.find({
            where: {
                isConfirmed: true
            },
            relations: ['products']
        });    
    }

    // Edit unconfirmed offer

    async editUnconfirmedOffer(user: User, id: string, details: Offer): Promise<Offer> {
        if(user.role == "seller") {
            let offer = await this.getOneById(id);
            if(offer.isConfirmed) {
                console.log('Offer is already confirmed and can\'t be edited anymore');
            } else {
                // edit offer title / price / description / products
                const editedOffer =  await _.extend(offer, {
                    title: details.title,
                    price: details.price,
                    description: details.description
                });
                console.log(editedOffer);
                //return await this.offersRepository.save(editedOffer);              
            }
        }

        throw new UnauthorizedException();
    }

}
