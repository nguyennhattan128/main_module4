import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user"
import {CartDetail} from "./cartDetail";


@Entity()

export class Cart{
    @PrimaryGeneratedColumn()
    id : number;
    @Column({type: 'boolean'})
    status : boolean;
    @Column({type: 'date'})
    date : string;
    @Column()
    totalMoney : number
    User: User
    @OneToMany(() => CartDetail, (cartDetail) => cartDetail.cart)
    cartDetails: CartDetail[]


    @ManyToOne(() => User, (user) => user.carts)
    user : User

}