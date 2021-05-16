import { GraphQLResolveInfo } from "graphql";
import { FindManyUserTokenArgs } from "./args/FindManyUserTokenArgs";
import { UserToken } from "../../../models/UserToken";
export declare class FindManyUserTokenResolver {
    findManyUserToken(ctx: any, info: GraphQLResolveInfo, args: FindManyUserTokenArgs): Promise<UserToken[]>;
}
