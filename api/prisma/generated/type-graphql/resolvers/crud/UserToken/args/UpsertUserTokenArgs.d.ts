import { UserTokenCreateInput } from "../../../inputs/UserTokenCreateInput";
import { UserTokenUpdateInput } from "../../../inputs/UserTokenUpdateInput";
import { UserTokenWhereUniqueInput } from "../../../inputs/UserTokenWhereUniqueInput";
export declare class UpsertUserTokenArgs {
    where: UserTokenWhereUniqueInput;
    create: UserTokenCreateInput;
    update: UserTokenUpdateInput;
}
