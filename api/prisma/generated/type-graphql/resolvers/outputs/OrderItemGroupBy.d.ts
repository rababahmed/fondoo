import { OrderItemAvgAggregate } from "../outputs/OrderItemAvgAggregate";
import { OrderItemCountAggregate } from "../outputs/OrderItemCountAggregate";
import { OrderItemMaxAggregate } from "../outputs/OrderItemMaxAggregate";
import { OrderItemMinAggregate } from "../outputs/OrderItemMinAggregate";
import { OrderItemSumAggregate } from "../outputs/OrderItemSumAggregate";
export declare class OrderItemGroupBy {
    id: string;
    quantity: number;
    total: number;
    spiceLevel: "None" | "Mild" | "Medium" | "Hot" | "ExtraHot";
    productId: string;
    orderId: number | null;
    createdAt: Date;
    updatedAt: Date;
    restaurantId: string | null;
    count: OrderItemCountAggregate | null;
    avg: OrderItemAvgAggregate | null;
    sum: OrderItemSumAggregate | null;
    min: OrderItemMinAggregate | null;
    max: OrderItemMaxAggregate | null;
}
