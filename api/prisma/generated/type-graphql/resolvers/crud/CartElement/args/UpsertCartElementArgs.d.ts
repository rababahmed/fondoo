import { CartElementCreateInput } from "../../../inputs/CartElementCreateInput";
import { CartElementUpdateInput } from "../../../inputs/CartElementUpdateInput";
import { CartElementWhereUniqueInput } from "../../../inputs/CartElementWhereUniqueInput";
export declare class UpsertCartElementArgs {
    where: CartElementWhereUniqueInput;
    create: CartElementCreateInput;
    update: CartElementUpdateInput;
}
