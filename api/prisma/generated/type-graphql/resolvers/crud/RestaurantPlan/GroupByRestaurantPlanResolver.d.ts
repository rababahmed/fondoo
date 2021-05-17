import { GraphQLResolveInfo } from "graphql";
import { GroupByRestaurantPlanArgs } from "./args/GroupByRestaurantPlanArgs";
import { RestaurantPlanGroupBy } from "../../outputs/RestaurantPlanGroupBy";
export declare class GroupByRestaurantPlanResolver {
    groupByRestaurantPlan(ctx: any, info: GraphQLResolveInfo, args: GroupByRestaurantPlanArgs): Promise<RestaurantPlanGroupBy[]>;
}
