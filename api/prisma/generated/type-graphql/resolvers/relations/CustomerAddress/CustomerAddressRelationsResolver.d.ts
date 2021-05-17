import { Customer } from "../../../models/Customer";
import { CustomerAddress } from "../../../models/CustomerAddress";
export declare class CustomerAddressRelationsResolver {
    Customer(customerAddress: CustomerAddress, ctx: any): Promise<Customer | null>;
}
