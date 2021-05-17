import { GraphQLResolveInfo } from "graphql";
import { AggregateRestaurantPlanArgs } from "./args/AggregateRestaurantPlanArgs";
import { AggregateRestaurantPlan } from "../../outputs/AggregateRestaurantPlan";
export declare class AggregateRestaurantPlanResolver {
    aggregateRestaurantPlan(ctx: any, info: GraphQLResolveInfo, args: AggregateRestaurantPlanArgs): Promise<AggregateRestaurantPlan>;
}
