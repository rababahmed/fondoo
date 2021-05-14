import { ProductAvgAggregate } from "../outputs/ProductAvgAggregate";
import { ProductCountAggregate } from "../outputs/ProductCountAggregate";
import { ProductMaxAggregate } from "../outputs/ProductMaxAggregate";
import { ProductMinAggregate } from "../outputs/ProductMinAggregate";
import { ProductSumAggregate } from "../outputs/ProductSumAggregate";
export declare class ProductGroupBy {
    id: string;
    createdAt: Date;
    name: string;
    description: string | null;
    image: string | null;
    price: number | null;
    spiceLevel: "None" | "Mild" | "Medium" | "Hot" | "ExtraHot";
    isPopular: boolean | null;
    isActive: boolean | null;
    productCategoryId: string | null;
    restaurantId: string | null;
    count: ProductCountAggregate | null;
    avg: ProductAvgAggregate | null;
    sum: ProductSumAggregate | null;
    min: ProductMinAggregate | null;
    max: ProductMaxAggregate | null;
}
