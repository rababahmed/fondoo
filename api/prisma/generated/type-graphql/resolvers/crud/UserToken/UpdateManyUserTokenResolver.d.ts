import { GraphQLResolveInfo } from "graphql";
import { UpdateManyUserTokenArgs } from "./args/UpdateManyUserTokenArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyUserTokenResolver {
    updateManyUserToken(ctx: any, info: GraphQLResolveInfo, args: UpdateManyUserTokenArgs): Promise<AffectedRowsOutput>;
}
