import { OrderElementCreateInput } from "../../../inputs/OrderElementCreateInput";
import { OrderElementUpdateInput } from "../../../inputs/OrderElementUpdateInput";
import { OrderElementWhereUniqueInput } from "../../../inputs/OrderElementWhereUniqueInput";
export declare class UpsertOrderElementArgs {
    where: OrderElementWhereUniqueInput;
    create: OrderElementCreateInput;
    update: OrderElementUpdateInput;
}
