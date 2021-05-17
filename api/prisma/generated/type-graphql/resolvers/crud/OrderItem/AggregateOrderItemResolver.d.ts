import { GraphQLResolveInfo } from "graphql";
import { AggregateOrderItemArgs } from "./args/AggregateOrderItemArgs";
import { AggregateOrderItem } from "../../outputs/AggregateOrderItem";
export declare class AggregateOrderItemResolver {
    aggregateOrderItem(ctx: any, info: GraphQLResolveInfo, args: AggregateOrderItemArgs): Promise<AggregateOrderItem>;
}
