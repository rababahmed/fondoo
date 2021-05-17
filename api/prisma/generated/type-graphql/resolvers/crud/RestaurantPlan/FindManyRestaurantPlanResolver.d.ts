import { GraphQLResolveInfo } from "graphql";
import { FindManyRestaurantPlanArgs } from "./args/FindManyRestaurantPlanArgs";
import { RestaurantPlan } from "../../../models/RestaurantPlan";
export declare class FindManyRestaurantPlanResolver {
    restaurantPlans(ctx: any, info: GraphQLResolveInfo, args: FindManyRestaurantPlanArgs): Promise<RestaurantPlan[]>;
}
