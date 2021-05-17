import { RestaurantPlanOrderByInput } from "../../../inputs/RestaurantPlanOrderByInput";
import { RestaurantPlanScalarWhereWithAggregatesInput } from "../../../inputs/RestaurantPlanScalarWhereWithAggregatesInput";
import { RestaurantPlanWhereInput } from "../../../inputs/RestaurantPlanWhereInput";
export declare class GroupByRestaurantPlanArgs {
    where?: RestaurantPlanWhereInput | undefined;
    orderBy?: RestaurantPlanOrderByInput[] | undefined;
    by: Array<"id" | "name" | "price" | "isActive">;
    having?: RestaurantPlanScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
