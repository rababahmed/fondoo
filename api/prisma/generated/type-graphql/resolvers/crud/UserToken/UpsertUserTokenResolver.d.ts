import { GraphQLResolveInfo } from "graphql";
import { UpsertUserTokenArgs } from "./args/UpsertUserTokenArgs";
import { UserToken } from "../../../models/UserToken";
export declare class UpsertUserTokenResolver {
    upsertUserToken(ctx: any, info: GraphQLResolveInfo, args: UpsertUserTokenArgs): Promise<UserToken>;
}
