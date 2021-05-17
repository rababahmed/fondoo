import { CustomerAddress } from "../models/CustomerAddress";
import { CustomerToken } from "../models/CustomerToken";
import { Order } from "../models/Order";
import { Restaurant } from "../models/Restaurant";
export declare class Customer {
    id: string;
    createdAt: Date;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    token?: CustomerToken[];
    addresses?: CustomerAddress[];
    orders?: Order[];
    restaurants?: Restaurant[];
    updatedAt: Date;
}
