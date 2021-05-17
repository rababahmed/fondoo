import { RestaurantPlanCreateInput } from "../../../inputs/RestaurantPlanCreateInput";
import { RestaurantPlanUpdateInput } from "../../../inputs/RestaurantPlanUpdateInput";
import { RestaurantPlanWhereUniqueInput } from "../../../inputs/RestaurantPlanWhereUniqueInput";
export declare class UpsertRestaurantPlanArgs {
    where: RestaurantPlanWhereUniqueInput;
    create: RestaurantPlanCreateInput;
    update: RestaurantPlanUpdateInput;
}
