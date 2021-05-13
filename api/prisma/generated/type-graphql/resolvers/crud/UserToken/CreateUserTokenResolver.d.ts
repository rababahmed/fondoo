import { GraphQLResolveInfo } from "graphql";
import { CreateUserTokenArgs } from "./args/CreateUserTokenArgs";
import { UserToken } from "../../../models/UserToken";
export declare class CreateUserTokenResolver {
    createUserToken(ctx: any, info: GraphQLResolveInfo, args: CreateUserTokenArgs): Promise<UserToken>;
}
