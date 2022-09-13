import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm'
import { Offer } from './offer.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    companyName: string;

    @Column()
    role: string;

    //offers
    @OneToMany(type => Offer, offers => offers.user)
    offers: Offer[]

    //reqOffers

    // @Column()
    // buyerId: Number

    // @Column()
    // sellerId: Number
}