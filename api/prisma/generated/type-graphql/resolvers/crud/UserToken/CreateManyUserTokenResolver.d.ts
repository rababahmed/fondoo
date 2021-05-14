import { GraphQLResolveInfo } from "graphql";
import { CreateManyUserTokenArgs } from "./args/CreateManyUserTokenArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyUserTokenResolver {
    createManyUserToken(ctx: any, info: GraphQLResolveInfo, args: CreateManyUserTokenArgs): Promise<AffectedRowsOutput>;
}
