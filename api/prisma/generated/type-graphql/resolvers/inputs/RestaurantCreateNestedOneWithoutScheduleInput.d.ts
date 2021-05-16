import { RestaurantCreateOrConnectWithoutScheduleInput } from "../inputs/RestaurantCreateOrConnectWithoutScheduleInput";
import { RestaurantCreateWithoutScheduleInput } from "../inputs/RestaurantCreateWithoutScheduleInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";
export declare class RestaurantCreateNestedOneWithoutScheduleInput {
    create?: RestaurantCreateWithoutScheduleInput | undefined;
    connectOrCreate?: RestaurantCreateOrConnectWithoutScheduleInput | undefined;
    connect?: RestaurantWhereUniqueInput | undefined;
}
