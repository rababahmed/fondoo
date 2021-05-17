import { OrderItemOrderByInput } from "../../../inputs/OrderItemOrderByInput";
import { OrderItemScalarWhereWithAggregatesInput } from "../../../inputs/OrderItemScalarWhereWithAggregatesInput";
import { OrderItemWhereInput } from "../../../inputs/OrderItemWhereInput";
export declare class GroupByOrderItemArgs {
    where?: OrderItemWhereInput | undefined;
    orderBy?: OrderItemOrderByInput[] | undefined;
    by: Array<"id" | "quantity" | "total" | "spiceLevel" | "productId" | "orderId" | "createdAt" | "updatedAt" | "restaurantId">;
    having?: OrderItemScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
