import { UserTokenOrderByInput } from "../../../inputs/UserTokenOrderByInput";
import { UserTokenWhereInput } from "../../../inputs/UserTokenWhereInput";
import { UserTokenWhereUniqueInput } from "../../../inputs/UserTokenWhereUniqueInput";
export declare class UserTokenArgs {
    where?: UserTokenWhereInput | undefined;
    orderBy?: UserTokenOrderByInput[] | undefined;
    cursor?: UserTokenWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "token" | "createdAt" | "updatedAt" | "userId"> | undefined;
}
