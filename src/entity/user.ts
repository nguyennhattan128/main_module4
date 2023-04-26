import {Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Cart} from "./cart";
import {CartDetail} from "./cartDetail";
@Entity()
export  class User {
    @PrimaryGeneratedColumn()
    id : number;
    @Column({type :'varchar'})
    name: string;
    @Column({type:'varchar'})
    password: string;
    @OneToMany(() => Cart, (cart) => cart.user)
    carts: Cart[]
}