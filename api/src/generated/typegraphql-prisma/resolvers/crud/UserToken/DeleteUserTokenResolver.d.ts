import { GraphQLResolveInfo } from "graphql";
import { DeleteUserTokenArgs } from "./args/DeleteUserTokenArgs";
import { UserToken } from "../../../models/UserToken";
export declare class DeleteUserTokenResolver {
    deleteUserToken(ctx: any, info: GraphQLResolveInfo, args: DeleteUserTokenArgs): Promise<UserToken | null>;
}
