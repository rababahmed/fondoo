import { OrderCreateInput } from "../../../inputs/OrderCreateInput";
import { OrderUpdateInput } from "../../../inputs/OrderUpdateInput";
import { OrderWhereUniqueInput } from "../../../inputs/OrderWhereUniqueInput";
export declare class UpsertOrderArgs {
    where: OrderWhereUniqueInput;
    create: OrderCreateInput;
    update: OrderUpdateInput;
}
