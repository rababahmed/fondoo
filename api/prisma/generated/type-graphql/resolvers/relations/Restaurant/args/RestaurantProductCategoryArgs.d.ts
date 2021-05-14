import { ProductCategoryOrderByInput } from "../../../inputs/ProductCategoryOrderByInput";
import { ProductCategoryWhereInput } from "../../../inputs/ProductCategoryWhereInput";
import { ProductCategoryWhereUniqueInput } from "../../../inputs/ProductCategoryWhereUniqueInput";
export declare class RestaurantProductCategoryArgs {
    where?: ProductCategoryWhereInput | undefined;
    orderBy?: ProductCategoryOrderByInput[] | undefined;
    cursor?: ProductCategoryWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "createdAt" | "name" | "description" | "image" | "isActive" | "isFeatured" | "restaurantId"> | undefined;
}
