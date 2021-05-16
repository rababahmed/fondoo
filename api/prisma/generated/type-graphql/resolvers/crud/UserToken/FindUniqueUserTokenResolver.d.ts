import { GraphQLResolveInfo } from "graphql";
import { FindUniqueUserTokenArgs } from "./args/FindUniqueUserTokenArgs";
import { UserToken } from "../../../models/UserToken";
export declare class FindUniqueUserTokenResolver {
    findUniqueUserToken(ctx: any, info: GraphQLResolveInfo, args: FindUniqueUserTokenArgs): Promise<UserToken | null>;
}
