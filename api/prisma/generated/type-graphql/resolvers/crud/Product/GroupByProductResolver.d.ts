import { GraphQLResolveInfo } from "graphql";
import { GroupByProductArgs } from "./args/GroupByProductArgs";
import { ProductGroupBy } from "../../outputs/ProductGroupBy";
export declare class GroupByProductResolver {
    groupByProduct(ctx: any, info: GraphQLResolveInfo, args: GroupByProductArgs): Promise<ProductGroupBy[]>;
}
