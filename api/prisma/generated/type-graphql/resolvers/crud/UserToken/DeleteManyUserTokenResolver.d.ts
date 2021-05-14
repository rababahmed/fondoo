import { GraphQLResolveInfo } from "graphql";
import { DeleteManyUserTokenArgs } from "./args/DeleteManyUserTokenArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyUserTokenResolver {
    deleteManyUserToken(ctx: any, info: GraphQLResolveInfo, args: DeleteManyUserTokenArgs): Promise<AffectedRowsOutput>;
}
