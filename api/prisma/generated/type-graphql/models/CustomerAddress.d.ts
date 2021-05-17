import { Customer } from "../models/Customer";
export declare class CustomerAddress {
    id: string;
    createdAt: Date;
    streetAddress: string;
    city: string;
    postCode: string;
    country: string;
    Customer?: Customer | null;
    customerId?: string | null;
}
