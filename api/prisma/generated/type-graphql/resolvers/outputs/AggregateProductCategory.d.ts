import { ProductCategoryCountAggregate } from "../outputs/ProductCategoryCountAggregate";
import { ProductCategoryMaxAggregate } from "../outputs/ProductCategoryMaxAggregate";
import { ProductCategoryMinAggregate } from "../outputs/ProductCategoryMinAggregate";
export declare class AggregateProductCategory {
    count: ProductCategoryCountAggregate | null;
    min: ProductCategoryMinAggregate | null;
    max: ProductCategoryMaxAggregate | null;
}
