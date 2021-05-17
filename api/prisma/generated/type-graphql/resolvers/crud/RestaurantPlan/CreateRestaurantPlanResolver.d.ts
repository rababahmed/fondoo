import { GraphQLResolveInfo } from "graphql";
import { CreateRestaurantPlanArgs } from "./args/CreateRestaurantPlanArgs";
import { RestaurantPlan } from "../../../models/RestaurantPlan";
export declare class CreateRestaurantPlanResolver {
    createRestaurantPlan(ctx: any, info: GraphQLResolveInfo, args: CreateRestaurantPlanArgs): Promise<RestaurantPlan>;
}
