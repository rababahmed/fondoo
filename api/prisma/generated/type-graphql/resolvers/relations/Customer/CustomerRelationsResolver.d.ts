import { Customer } from "../../../models/Customer";
import { CustomerAddress } from "../../../models/CustomerAddress";
import { CustomerToken } from "../../../models/CustomerToken";
import { Order } from "../../../models/Order";
import { Restaurant } from "../../../models/Restaurant";
import { CustomerAddressesArgs } from "./args/CustomerAddressesArgs";
import { CustomerOrdersArgs } from "./args/CustomerOrdersArgs";
import { CustomerRestaurantsArgs } from "./args/CustomerRestaurantsArgs";
import { CustomerTokenArgs } from "./args/CustomerTokenArgs";
export declare class CustomerRelationsResolver {
    token(customer: Customer, ctx: any, args: CustomerTokenArgs): Promise<CustomerToken[]>;
    addresses(customer: Customer, ctx: any, args: CustomerAddressesArgs): Promise<CustomerAddress[]>;
    orders(customer: Customer, ctx: any, args: CustomerOrdersArgs): Promise<Order[]>;
    restaurants(customer: Customer, ctx: any, args: CustomerRestaurantsArgs): Promise<Restaurant[]>;
}
