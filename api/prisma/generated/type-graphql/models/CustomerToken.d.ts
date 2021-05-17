import { Customer } from "../models/Customer";
export declare class CustomerToken {
    id: string;
    token: string;
    createdAt: Date;
    updatedAt: Date;
    Customer?: Customer | null;
    customerId?: string | null;
}
