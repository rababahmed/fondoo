import { Customer } from "../../../models/Customer";
import { CustomerToken } from "../../../models/CustomerToken";
export declare class CustomerTokenRelationsResolver {
    Customer(customerToken: CustomerToken, ctx: any): Promise<Customer | null>;
}
