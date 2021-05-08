import { OrderElementOrderByInput } from "../../../inputs/OrderElementOrderByInput";
import { OrderElementWhereInput } from "../../../inputs/OrderElementWhereInput";
import { OrderElementWhereUniqueInput } from "../../../inputs/OrderElementWhereUniqueInput";
export declare class OrderElementsArgs {
    where?: OrderElementWhereInput | undefined;
    orderBy?: OrderElementOrderByInput[] | undefined;
    cursor?: OrderElementWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "code" | "name" | "description" | "image" | "price" | "addonText" | "orderId" | "productCategoryId" | "createdAt" | "updatedAt"> | undefined;
}
