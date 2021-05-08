import { Order } from "../../../models/Order";
import { OrderElement } from "../../../models/OrderElement";
import { ProductCategory } from "../../../models/ProductCategory";
export declare class OrderElementRelationsResolver {
    category(orderElement: OrderElement, ctx: any): Promise<ProductCategory>;
    Order(orderElement: OrderElement, ctx: any): Promise<Order | null>;
}
