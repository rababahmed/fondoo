import { OrderAvgAggregate } from "../outputs/OrderAvgAggregate";
import { OrderCountAggregate } from "../outputs/OrderCountAggregate";
import { OrderMaxAggregate } from "../outputs/OrderMaxAggregate";
import { OrderMinAggregate } from "../outputs/OrderMinAggregate";
import { OrderSumAggregate } from "../outputs/OrderSumAggregate";
export declare class AggregateOrder {
    count: OrderCountAggregate | null;
    avg: OrderAvgAggregate | null;
    sum: OrderSumAggregate | null;
    min: OrderMinAggregate | null;
    max: OrderMaxAggregate | null;
}
