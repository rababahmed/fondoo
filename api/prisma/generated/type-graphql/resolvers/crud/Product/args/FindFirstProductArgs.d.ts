import { ProductOrderByInput } from "../../../inputs/ProductOrderByInput";
import { ProductWhereInput } from "../../../inputs/ProductWhereInput";
import { ProductWhereUniqueInput } from "../../../inputs/ProductWhereUniqueInput";
export declare class FindFirstProductArgs {
    where?: ProductWhereInput | undefined;
    orderBy?: ProductOrderByInput[] | undefined;
    cursor?: ProductWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "createdAt" | "name" | "description" | "image" | "price" | "spiceLevel" | "isPopular" | "isActive" | "restaurantId" | "orderId" | "productCategoryId"> | undefined;
}
