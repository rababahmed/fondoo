import { GraphQLResolveInfo } from "graphql";
import { CreateManyProductCategoryArgs } from "./args/CreateManyProductCategoryArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyProductCategoryResolver {
    createManyProductCategory(ctx: any, info: GraphQLResolveInfo, args: CreateManyProductCategoryArgs): Promise<AffectedRowsOutput>;
}
