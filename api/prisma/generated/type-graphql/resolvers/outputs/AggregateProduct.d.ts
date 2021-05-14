import { ProductAvgAggregate } from "../outputs/ProductAvgAggregate";
import { ProductCountAggregate } from "../outputs/ProductCountAggregate";
import { ProductMaxAggregate } from "../outputs/ProductMaxAggregate";
import { ProductMinAggregate } from "../outputs/ProductMinAggregate";
import { ProductSumAggregate } from "../outputs/ProductSumAggregate";
export declare class AggregateProduct {
    count: ProductCountAggregate | null;
    avg: ProductAvgAggregate | null;
    sum: ProductSumAggregate | null;
    min: ProductMinAggregate | null;
    max: ProductMaxAggregate | null;
}
