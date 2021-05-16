import { CustomerUncheckedCreateInput } from "../../../inputs/CustomerUncheckedCreateInput";
import { CustomerUncheckedUpdateInput } from "../../../inputs/CustomerUncheckedUpdateInput";
import { CustomerWhereUniqueInput } from "../../../inputs/CustomerWhereUniqueInput";
export declare class UpsertCustomerArgs {
    where: CustomerWhereUniqueInput;
    create: CustomerUncheckedCreateInput;
    update: CustomerUncheckedUpdateInput;
}
