import { GraphQLResolveInfo } from "graphql";
import { UpdateRestaurantPlanArgs } from "./args/UpdateRestaurantPlanArgs";
import { RestaurantPlan } from "../../../models/RestaurantPlan";
export declare class UpdateRestaurantPlanResolver {
    updateRestaurantPlan(ctx: any, info: GraphQLResolveInfo, args: UpdateRestaurantPlanArgs): Promise<RestaurantPlan | null>;
}
