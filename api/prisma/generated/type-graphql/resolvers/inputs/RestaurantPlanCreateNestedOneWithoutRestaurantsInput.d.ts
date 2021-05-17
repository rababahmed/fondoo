import { RestaurantPlanCreateOrConnectWithoutRestaurantsInput } from "../inputs/RestaurantPlanCreateOrConnectWithoutRestaurantsInput";
import { RestaurantPlanCreateWithoutRestaurantsInput } from "../inputs/RestaurantPlanCreateWithoutRestaurantsInput";
import { RestaurantPlanWhereUniqueInput } from "../inputs/RestaurantPlanWhereUniqueInput";
export declare class RestaurantPlanCreateNestedOneWithoutRestaurantsInput {
    create?: RestaurantPlanCreateWithoutRestaurantsInput | undefined;
    connectOrCreate?: RestaurantPlanCreateOrConnectWithoutRestaurantsInput | undefined;
    connect?: RestaurantPlanWhereUniqueInput | undefined;
}
