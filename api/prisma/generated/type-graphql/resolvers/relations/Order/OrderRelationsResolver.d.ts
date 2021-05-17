import { Coupon } from "../../../models/Coupon";
import { Customer } from "../../../models/Customer";
import { Order } from "../../../models/Order";
import { OrderItem } from "../../../models/OrderItem";
import { Restaurant } from "../../../models/Restaurant";
import { OrderItemsArgs } from "./args/OrderItemsArgs";
export declare class OrderRelationsResolver {
    items(order: Order, ctx: any, args: OrderItemsArgs): Promise<OrderItem[]>;
    Coupon(order: Order, ctx: any): Promise<Coupon | null>;
    restaurant(order: Order, ctx: any): Promise<Restaurant>;
    Customer(order: Order, ctx: any): Promise<Customer | null>;
}
