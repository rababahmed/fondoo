import { ProductOrderByInput } from "../../../inputs/ProductOrderByInput";
import { ProductScalarWhereWithAggregatesInput } from "../../../inputs/ProductScalarWhereWithAggregatesInput";
import { ProductWhereInput } from "../../../inputs/ProductWhereInput";
export declare class GroupByProductArgs {
    where?: ProductWhereInput | undefined;
    orderBy?: ProductOrderByInput[] | undefined;
    by: Array<"id" | "createdAt" | "name" | "description" | "image" | "price" | "spiceLevel" | "isPopular" | "isActive" | "restaurantId" | "orderId" | "productCategoryId">;
    having?: ProductScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
