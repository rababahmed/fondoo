import { GraphQLResolveInfo } from "graphql";
import { UpdateManyProductCategoryArgs } from "./args/UpdateManyProductCategoryArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyProductCategoryResolver {
    updateManyProductCategory(ctx: any, info: GraphQLResolveInfo, args: UpdateManyProductCategoryArgs): Promise<AffectedRowsOutput>;
}
