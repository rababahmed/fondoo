import { OrderElementOrderByInput } from "../../../inputs/OrderElementOrderByInput";
import { OrderElementScalarWhereWithAggregatesInput } from "../../../inputs/OrderElementScalarWhereWithAggregatesInput";
import { OrderElementWhereInput } from "../../../inputs/OrderElementWhereInput";
export declare class GroupByOrderElementArgs {
    where?: OrderElementWhereInput | undefined;
    orderBy?: OrderElementOrderByInput[] | undefined;
    by: Array<"id" | "code" | "name" | "description" | "image" | "price" | "addonText" | "orderId" | "productCategoryId" | "createdAt" | "updatedAt">;
    having?: OrderElementScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
