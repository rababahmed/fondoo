import { UserTokenOrderByInput } from "../../../inputs/UserTokenOrderByInput";
import { UserTokenScalarWhereWithAggregatesInput } from "../../../inputs/UserTokenScalarWhereWithAggregatesInput";
import { UserTokenWhereInput } from "../../../inputs/UserTokenWhereInput";
export declare class GroupByUserTokenArgs {
    where?: UserTokenWhereInput | undefined;
    orderBy?: UserTokenOrderByInput[] | undefined;
    by: Array<"id" | "token" | "createdAt" | "updatedAt" | "userId">;
    having?: UserTokenScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
