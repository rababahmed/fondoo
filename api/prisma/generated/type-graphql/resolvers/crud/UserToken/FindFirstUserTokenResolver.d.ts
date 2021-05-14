import { GraphQLResolveInfo } from "graphql";
import { FindFirstUserTokenArgs } from "./args/FindFirstUserTokenArgs";
import { UserToken } from "../../../models/UserToken";
export declare class FindFirstUserTokenResolver {
    findFirstUserToken(ctx: any, info: GraphQLResolveInfo, args: FindFirstUserTokenArgs): Promise<UserToken | null>;
}
