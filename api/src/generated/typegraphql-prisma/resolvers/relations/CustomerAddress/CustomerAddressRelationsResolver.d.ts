import { Customer } from "../../../models/Customer";
import { CustomerAddress } from "../../../models/CustomerAddress";
import { Order } from "../../../models/Order";
import { CustomerAddressOrderArgs } from "./args/CustomerAddressOrderArgs";
export declare class CustomerAddressRelationsResolver {
    Customer(customerAddress: CustomerAddress, ctx: any): Promise<Customer | null>;
    Order(customerAddress: CustomerAddress, ctx: any, args: CustomerAddressOrderArgs): Promise<Order[]>;
}
