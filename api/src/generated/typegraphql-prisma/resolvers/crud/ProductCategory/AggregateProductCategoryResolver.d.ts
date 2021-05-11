import { GraphQLResolveInfo } from "graphql";
import { AggregateProductCategoryArgs } from "./args/AggregateProductCategoryArgs";
import { AggregateProductCategory } from "../../outputs/AggregateProductCategory";
export declare class AggregateProductCategoryResolver {
    aggregateProductCategory(ctx: any, info: GraphQLResolveInfo, args: AggregateProductCategoryArgs): Promise<AggregateProductCategory>;
}
