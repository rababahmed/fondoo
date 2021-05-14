import { ProductCategoryOrderByInput } from "../../../inputs/ProductCategoryOrderByInput";
import { ProductCategoryScalarWhereWithAggregatesInput } from "../../../inputs/ProductCategoryScalarWhereWithAggregatesInput";
import { ProductCategoryWhereInput } from "../../../inputs/ProductCategoryWhereInput";
export declare class GroupByProductCategoryArgs {
    where?: ProductCategoryWhereInput | undefined;
    orderBy?: ProductCategoryOrderByInput[] | undefined;
    by: Array<"id" | "createdAt" | "name" | "description" | "image" | "isActive" | "isFeatured" | "restaurantId">;
    having?: ProductCategoryScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
