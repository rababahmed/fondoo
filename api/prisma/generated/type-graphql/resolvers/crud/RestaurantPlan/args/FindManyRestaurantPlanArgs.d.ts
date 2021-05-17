import { RestaurantPlanOrderByInput } from "../../../inputs/RestaurantPlanOrderByInput";
import { RestaurantPlanWhereInput } from "../../../inputs/RestaurantPlanWhereInput";
import { RestaurantPlanWhereUniqueInput } from "../../../inputs/RestaurantPlanWhereUniqueInput";
export declare class FindManyRestaurantPlanArgs {
    where?: RestaurantPlanWhereInput | undefined;
    orderBy?: RestaurantPlanOrderByInput[] | undefined;
    cursor?: RestaurantPlanWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "price" | "isActive"> | undefined;
}
