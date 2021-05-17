import { RestaurantCreateOrConnectWithoutSchedulesInput } from "../inputs/RestaurantCreateOrConnectWithoutSchedulesInput";
import { RestaurantCreateWithoutSchedulesInput } from "../inputs/RestaurantCreateWithoutSchedulesInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";
export declare class RestaurantCreateNestedOneWithoutSchedulesInput {
    create?: RestaurantCreateWithoutSchedulesInput | undefined;
    connectOrCreate?: RestaurantCreateOrConnectWithoutSchedulesInput | undefined;
    connect?: RestaurantWhereUniqueInput | undefined;
}
