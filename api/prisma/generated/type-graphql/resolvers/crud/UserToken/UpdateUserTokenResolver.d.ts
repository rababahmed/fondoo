import { GraphQLResolveInfo } from "graphql";
import { UpdateUserTokenArgs } from "./args/UpdateUserTokenArgs";
import { UserToken } from "../../../models/UserToken";
export declare class UpdateUserTokenResolver {
    updateUserToken(ctx: any, info: GraphQLResolveInfo, args: UpdateUserTokenArgs): Promise<UserToken | null>;
}
