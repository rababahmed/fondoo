import { GraphQLResolveInfo } from "graphql";
import { FindManyUserArgs } from "./args/FindManyUserArgs";
import { User } from "../../../models/User";
export declare class FindManyUserResolver {
    findManyUser(ctx: any, info: GraphQLResolveInfo, args: FindManyUserArgs): Promise<User[]>;
}
