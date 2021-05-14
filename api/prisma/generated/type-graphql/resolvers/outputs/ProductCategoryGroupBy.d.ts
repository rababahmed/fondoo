import { ProductCategoryCountAggregate } from "../outputs/ProductCategoryCountAggregate";
import { ProductCategoryMaxAggregate } from "../outputs/ProductCategoryMaxAggregate";
import { ProductCategoryMinAggregate } from "../outputs/ProductCategoryMinAggregate";
export declare class ProductCategoryGroupBy {
    id: string;
    createdAt: Date;
    name: string;
    description: string | null;
    image: string | null;
    isActive: boolean | null;
    isFeatured: boolean | null;
    restaurantId: string;
    count: ProductCategoryCountAggregate | null;
    min: ProductCategoryMinAggregate | null;
    max: ProductCategoryMaxAggregate | null;
}
