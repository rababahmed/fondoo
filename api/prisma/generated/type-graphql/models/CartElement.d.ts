import { Customer } from "../models/Customer";
import { Product } from "../models/Product";
export declare class CartElement {
    id: string;
    quantity: number;
    product?: Product;
    customer?: Customer;
    customerId: number;
    productId: string;
    createdAt: Date;
    updatedAt: Date;
}
