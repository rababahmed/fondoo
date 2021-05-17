import { OrderItemCreateInput } from "../../../inputs/OrderItemCreateInput";
import { OrderItemUpdateInput } from "../../../inputs/OrderItemUpdateInput";
import { OrderItemWhereUniqueInput } from "../../../inputs/OrderItemWhereUniqueInput";
export declare class UpsertOrderItemArgs {
    where: OrderItemWhereUniqueInput;
    create: OrderItemCreateInput;
    update: OrderItemUpdateInput;
}
