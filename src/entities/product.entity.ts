import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm'
import { Offer } from './offer.entity'

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @ManyToOne(type => Offer, offer => offer.products) 
    offer: Offer;
}