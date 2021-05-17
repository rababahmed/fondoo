import { GraphQLResolveInfo } from "graphql";
import { FindUniqueRestaurantPlanArgs } from "./args/FindUniqueRestaurantPlanArgs";
import { RestaurantPlan } from "../../../models/RestaurantPlan";
export declare class FindUniqueRestaurantPlanResolver {
    restaurantPlan(ctx: any, info: GraphQLResolveInfo, args: FindUniqueRestaurantPlanArgs): Promise<RestaurantPlan | null>;
}
