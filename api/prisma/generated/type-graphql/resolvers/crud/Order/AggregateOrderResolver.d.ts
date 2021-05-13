import { GraphQLResolveInfo } from "graphql";
import { AggregateOrderArgs } from "./args/AggregateOrderArgs";
import { AggregateOrder } from "../../outputs/AggregateOrder";
export declare class AggregateOrderResolver {
    aggregateOrder(ctx: any, info: GraphQLResolveInfo, args: AggregateOrderArgs): Promise<AggregateOrder>;
}
