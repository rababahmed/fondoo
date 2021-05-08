import { GraphQLResolveInfo } from "graphql";
import { DeleteManyProductCategoryArgs } from "./args/DeleteManyProductCategoryArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyProductCategoryResolver {
    deleteManyProductCategory(ctx: any, info: GraphQLResolveInfo, args: DeleteManyProductCategoryArgs): Promise<AffectedRowsOutput>;
}
