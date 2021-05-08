import { Customer } from "../../../models/Customer";
import { CustomerAddress } from "../../../models/CustomerAddress";
import { Order } from "../../../models/Order";
import { OrderElement } from "../../../models/OrderElement";
import { Product } from "../../../models/Product";
import { Restaurant } from "../../../models/Restaurant";
import { OrderElementsArgs } from "./args/OrderElementsArgs";
import { OrderProductArgs } from "./args/OrderProductArgs";
export declare class OrderRelationsResolver {
    elements(order: Order, ctx: any, args: OrderElementsArgs): Promise<OrderElement[]>;
    customerAddress(order: Order, ctx: any): Promise<CustomerAddress>;
    restaurant(order: Order, ctx: any): Promise<Restaurant | null>;
    customer(order: Order, ctx: any): Promise<Customer | null>;
    product(order: Order, ctx: any, args: OrderProductArgs): Promise<Product[]>;
}
