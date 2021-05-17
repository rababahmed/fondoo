import { GraphQLResolveInfo } from "graphql";
import { FindFirstRestaurantPlanArgs } from "./args/FindFirstRestaurantPlanArgs";
import { RestaurantPlan } from "../../../models/RestaurantPlan";
export declare class FindFirstRestaurantPlanResolver {
    findFirstRestaurantPlan(ctx: any, info: GraphQLResolveInfo, args: FindFirstRestaurantPlanArgs): Promise<RestaurantPlan | null>;
}
