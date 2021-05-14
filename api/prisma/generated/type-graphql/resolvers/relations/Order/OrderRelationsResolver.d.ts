import { Customer } from "../../../models/Customer";
import { CustomerAddress } from "../../../models/CustomerAddress";
import { Order } from "../../../models/Order";
import { Restaurant } from "../../../models/Restaurant";
import { User } from "../../../models/User";
export declare class OrderRelationsResolver {
    user(order: Order, ctx: any): Promise<User>;
    restaurant(order: Order, ctx: any): Promise<Restaurant>;
    Customer(order: Order, ctx: any): Promise<Customer | null>;
    CustomerAddress(order: Order, ctx: any): Promise<CustomerAddress | null>;
}
