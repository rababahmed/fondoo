import { Customer } from "../models/Customer";
import { Order } from "../models/Order";
export declare class CustomerAddress {
    id: number;
    createdAt: Date;
    streetAddress: string;
    city: string;
    postCode: string;
    country: string;
    Customer?: Customer | null;
    customerId?: number | null;
    Order?: Order[];
}
