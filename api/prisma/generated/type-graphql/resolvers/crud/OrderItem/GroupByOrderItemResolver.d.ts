import { GraphQLResolveInfo } from "graphql";
import { GroupByOrderItemArgs } from "./args/GroupByOrderItemArgs";
import { OrderItemGroupBy } from "../../outputs/OrderItemGroupBy";
export declare class GroupByOrderItemResolver {
    groupByOrderItem(ctx: any, info: GraphQLResolveInfo, args: GroupByOrderItemArgs): Promise<OrderItemGroupBy[]>;
}
