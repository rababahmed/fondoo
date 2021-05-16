import { UserUncheckedCreateInput } from "../../../inputs/UserUncheckedCreateInput";
import { UserUncheckedUpdateInput } from "../../../inputs/UserUncheckedUpdateInput";
import { UserWhereUniqueInput } from "../../../inputs/UserWhereUniqueInput";
export declare class UpsertUserArgs {
    where: UserWhereUniqueInput;
    create: UserUncheckedCreateInput;
    update: UserUncheckedUpdateInput;
}
