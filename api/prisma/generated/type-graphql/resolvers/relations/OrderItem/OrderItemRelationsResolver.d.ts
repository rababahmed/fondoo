import { Order } from "../../../models/Order";
import { OrderItem } from "../../../models/OrderItem";
import { Product } from "../../../models/Product";
import { Restaurant } from "../../../models/Restaurant";
export declare class OrderItemRelationsResolver {
    product(orderItem: OrderItem, ctx: any): Promise<Product>;
    Order(orderItem: OrderItem, ctx: any): Promise<Order | null>;
    Restaurant(orderItem: OrderItem, ctx: any): Promise<Restaurant | null>;
}
