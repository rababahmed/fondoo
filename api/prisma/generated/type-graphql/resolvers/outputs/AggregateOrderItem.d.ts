import { OrderItemAvgAggregate } from "../outputs/OrderItemAvgAggregate";
import { OrderItemCountAggregate } from "../outputs/OrderItemCountAggregate";
import { OrderItemMaxAggregate } from "../outputs/OrderItemMaxAggregate";
import { OrderItemMinAggregate } from "../outputs/OrderItemMinAggregate";
import { OrderItemSumAggregate } from "../outputs/OrderItemSumAggregate";
export declare class AggregateOrderItem {
    count: OrderItemCountAggregate | null;
    avg: OrderItemAvgAggregate | null;
    sum: OrderItemSumAggregate | null;
    min: OrderItemMinAggregate | null;
    max: OrderItemMaxAggregate | null;
}
