import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany, ManyToOne, JoinColumn} from 'typeorm'
import { Product } from './product.entity'
import { User } from './user.entity'

@Entity()
export class Offer {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    price: number

    @CreateDateColumn()
    addedAt: Date

    @Column({default: "In negotiation"})
    status: string

    @Column({default: false}) 
    isConfirmed: boolean

    // products
    @OneToMany(type => Product, product => product.offer)
    products: Product[]

    @ManyToOne(type => User, user => user.offers)
    user: User

    //seller
}