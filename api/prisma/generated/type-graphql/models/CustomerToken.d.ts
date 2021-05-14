import { Customer } from "../models/Customer";
export declare class CustomerToken {
    id: number;
    token: string;
    createdAt: Date;
    updatedAt: Date;
    Customer?: Customer | null;
    customerId?: number | null;
}
