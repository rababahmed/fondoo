import { GraphQLResolveInfo } from "graphql";
import { AggregateProductArgs } from "./args/AggregateProductArgs";
import { AggregateProduct } from "../../outputs/AggregateProduct";
export declare class AggregateProductResolver {
    aggregateProduct(ctx: any, info: GraphQLResolveInfo, args: AggregateProductArgs): Promise<AggregateProduct>;
}
