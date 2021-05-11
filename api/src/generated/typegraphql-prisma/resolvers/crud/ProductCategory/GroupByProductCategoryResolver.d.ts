import { GraphQLResolveInfo } from "graphql";
import { GroupByProductCategoryArgs } from "./args/GroupByProductCategoryArgs";
import { ProductCategoryGroupBy } from "../../outputs/ProductCategoryGroupBy";
export declare class GroupByProductCategoryResolver {
    groupByProductCategory(ctx: any, info: GraphQLResolveInfo, args: GroupByProductCategoryArgs): Promise<ProductCategoryGroupBy[]>;
}
