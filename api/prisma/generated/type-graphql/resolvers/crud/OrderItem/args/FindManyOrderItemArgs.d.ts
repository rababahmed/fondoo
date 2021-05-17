import { OrderItemOrderByInput } from "../../../inputs/OrderItemOrderByInput";
import { OrderItemWhereInput } from "../../../inputs/OrderItemWhereInput";
import { OrderItemWhereUniqueInput } from "../../../inputs/OrderItemWhereUniqueInput";
export declare class FindManyOrderItemArgs {
    where?: OrderItemWhereInput | undefined;
    orderBy?: OrderItemOrderByInput[] | undefined;
    cursor?: OrderItemWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "quantity" | "total" | "spiceLevel" | "productId" | "orderId" | "createdAt" | "updatedAt" | "restaurantId"> | undefined;
}
