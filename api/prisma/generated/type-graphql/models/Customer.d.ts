import { CustomerAddress } from "../models/CustomerAddress";
import { CustomerToken } from "../models/CustomerToken";
import { Order } from "../models/Order";
import { Restaurant } from "../models/Restaurant";
export declare class Customer {
    id: number;
    createdAt: Date;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    token?: CustomerToken[];
    address?: CustomerAddress[];
    orders?: Order[];
    Restaurant?: Restaurant | null;
    restaurantId?: string | null;
    updatedAt: Date;
}
