import { GraphQLResolveInfo } from "graphql";
import { DeleteManyProductArgs } from "./args/DeleteManyProductArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyProductResolver {
    deleteManyProduct(ctx: any, info: GraphQLResolveInfo, args: DeleteManyProductArgs): Promise<AffectedRowsOutput>;
}
