import { Customer } from "../../../models/Customer";
import { CustomerAddress } from "../../../models/CustomerAddress";
import { CustomerToken } from "../../../models/CustomerToken";
import { Order } from "../../../models/Order";
import { Restaurant } from "../../../models/Restaurant";
import { CustomerAddressArgs } from "./args/CustomerAddressArgs";
import { CustomerOrdersArgs } from "./args/CustomerOrdersArgs";
import { CustomerTokenArgs } from "./args/CustomerTokenArgs";
export declare class CustomerRelationsResolver {
    token(customer: Customer, ctx: any, args: CustomerTokenArgs): Promise<CustomerToken[]>;
    address(customer: Customer, ctx: any, args: CustomerAddressArgs): Promise<CustomerAddress[]>;
    orders(customer: Customer, ctx: any, args: CustomerOrdersArgs): Promise<Order[]>;
    Restaurant(customer: Customer, ctx: any): Promise<Restaurant | null>;
}
