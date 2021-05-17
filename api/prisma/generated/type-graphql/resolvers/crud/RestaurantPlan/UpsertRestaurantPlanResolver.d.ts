import { GraphQLResolveInfo } from "graphql";
import { UpsertRestaurantPlanArgs } from "./args/UpsertRestaurantPlanArgs";
import { RestaurantPlan } from "../../../models/RestaurantPlan";
export declare class UpsertRestaurantPlanResolver {
    upsertRestaurantPlan(ctx: any, info: GraphQLResolveInfo, args: UpsertRestaurantPlanArgs): Promise<RestaurantPlan>;
}
