import { Restaurant } from "../../../models/Restaurant";
import { RestaurantPlan } from "../../../models/RestaurantPlan";
import { RestaurantPlanRestaurantsArgs } from "./args/RestaurantPlanRestaurantsArgs";
export declare class RestaurantPlanRelationsResolver {
    restaurants(restaurantPlan: RestaurantPlan, ctx: any, args: RestaurantPlanRestaurantsArgs): Promise<Restaurant[]>;
}
