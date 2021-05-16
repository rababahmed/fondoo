import { OrderUncheckedCreateInput } from "../../../inputs/OrderUncheckedCreateInput";
import { OrderUncheckedUpdateInput } from "../../../inputs/OrderUncheckedUpdateInput";
import { OrderWhereUniqueInput } from "../../../inputs/OrderWhereUniqueInput";
export declare class UpsertOrderArgs {
    where: OrderWhereUniqueInput;
    create: OrderUncheckedCreateInput;
    update: OrderUncheckedUpdateInput;
}
