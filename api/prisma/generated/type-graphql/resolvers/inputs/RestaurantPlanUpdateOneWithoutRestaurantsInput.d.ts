import { RestaurantPlanCreateOrConnectWithoutRestaurantsInput } from "../inputs/RestaurantPlanCreateOrConnectWithoutRestaurantsInput";
import { RestaurantPlanCreateWithoutRestaurantsInput } from "../inputs/RestaurantPlanCreateWithoutRestaurantsInput";
import { RestaurantPlanUpdateWithoutRestaurantsInput } from "../inputs/RestaurantPlanUpdateWithoutRestaurantsInput";
import { RestaurantPlanUpsertWithoutRestaurantsInput } from "../inputs/RestaurantPlanUpsertWithoutRestaurantsInput";
import { RestaurantPlanWhereUniqueInput } from "../inputs/RestaurantPlanWhereUniqueInput";
export declare class RestaurantPlanUpdateOneWithoutRestaurantsInput {
    create?: RestaurantPlanCreateWithoutRestaurantsInput | undefined;
    connectOrCreate?: RestaurantPlanCreateOrConnectWithoutRestaurantsInput | undefined;
    upsert?: RestaurantPlanUpsertWithoutRestaurantsInput | undefined;
    connect?: RestaurantPlanWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: RestaurantPlanUpdateWithoutRestaurantsInput | undefined;
}
