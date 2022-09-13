import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn} from 'typeorm'

@Entity()
export class RequestedOffer {
    @PrimaryGeneratedColumn()
    id: Number

    @Column()
    title: String

    @Column()
    description: String

    @Column()
    budget: Number

    @CreateDateColumn()
    addedAt: Date

    //buyer
    //product
}