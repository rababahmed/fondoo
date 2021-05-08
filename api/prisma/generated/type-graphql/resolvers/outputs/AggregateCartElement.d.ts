import { CartElementAvgAggregate } from "../outputs/CartElementAvgAggregate";
import { CartElementCountAggregate } from "../outputs/CartElementCountAggregate";
import { CartElementMaxAggregate } from "../outputs/CartElementMaxAggregate";
import { CartElementMinAggregate } from "../outputs/CartElementMinAggregate";
import { CartElementSumAggregate } from "../outputs/CartElementSumAggregate";
export declare class AggregateCartElement {
    count: CartElementCountAggregate | null;
    avg: CartElementAvgAggregate | null;
    sum: CartElementSumAggregate | null;
    min: CartElementMinAggregate | null;
    max: CartElementMaxAggregate | null;
}
