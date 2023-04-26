import { User } from "./user";
import { CartDetail } from "./cartDetail";
export declare class Cart {
    id: number;
    status: boolean;
    date: string;
    totalMoney: number;
    User: User;
    cartDetails: CartDetail[];
    user: User;
}
