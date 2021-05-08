import { GraphQLResolveInfo } from "graphql";
import { GroupByRestaurantArgs } from "./args/GroupByRestaurantArgs";
import { RestaurantGroupBy } from "../../outputs/RestaurantGroupBy";
export declare class GroupByRestaurantResolver {
    groupByRestaurant(ctx: any, info: GraphQLResolveInfo, args: GroupByRestaurantArgs): Promise<RestaurantGroupBy[]>;
}
