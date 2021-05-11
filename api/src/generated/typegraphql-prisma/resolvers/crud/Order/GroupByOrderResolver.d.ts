import { GraphQLResolveInfo } from "graphql";
import { GroupByOrderArgs } from "./args/GroupByOrderArgs";
import { OrderGroupBy } from "../../outputs/OrderGroupBy";
export declare class GroupByOrderResolver {
    groupByOrder(ctx: any, info: GraphQLResolveInfo, args: GroupByOrderArgs): Promise<OrderGroupBy[]>;
}
