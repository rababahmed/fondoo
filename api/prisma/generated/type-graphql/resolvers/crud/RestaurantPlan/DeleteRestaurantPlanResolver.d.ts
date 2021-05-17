import { GraphQLResolveInfo } from "graphql";
import { DeleteRestaurantPlanArgs } from "./args/DeleteRestaurantPlanArgs";
import { RestaurantPlan } from "../../../models/RestaurantPlan";
export declare class DeleteRestaurantPlanResolver {
    deleteRestaurantPlan(ctx: any, info: GraphQLResolveInfo, args: DeleteRestaurantPlanArgs): Promise<RestaurantPlan | null>;
}
