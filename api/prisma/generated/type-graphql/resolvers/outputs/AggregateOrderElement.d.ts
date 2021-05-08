import { OrderElementAvgAggregate } from "../outputs/OrderElementAvgAggregate";
import { OrderElementCountAggregate } from "../outputs/OrderElementCountAggregate";
import { OrderElementMaxAggregate } from "../outputs/OrderElementMaxAggregate";
import { OrderElementMinAggregate } from "../outputs/OrderElementMinAggregate";
import { OrderElementSumAggregate } from "../outputs/OrderElementSumAggregate";
export declare class AggregateOrderElement {
    count: OrderElementCountAggregate | null;
    avg: OrderElementAvgAggregate | null;
    sum: OrderElementSumAggregate | null;
    min: OrderElementMinAggregate | null;
    max: OrderElementMaxAggregate | null;
}
