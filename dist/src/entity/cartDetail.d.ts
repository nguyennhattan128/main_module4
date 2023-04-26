import { Cart } from "./cart";
import { Product } from "./product";
export declare class CartDetail {
    id: number;
    name: string;
    price: number;
    quantity: number;
    totalMoneyDetail: number;
    cart: Cart;
    products: Product;
}
