import { GraphQLResolveInfo } from "graphql";
import { GroupByOrderElementArgs } from "./args/GroupByOrderElementArgs";
import { OrderElementGroupBy } from "../../outputs/OrderElementGroupBy";
export declare class GroupByOrderElementResolver {
    groupByOrderElement(ctx: any, info: GraphQLResolveInfo, args: GroupByOrderElementArgs): Promise<OrderElementGroupBy[]>;
}
