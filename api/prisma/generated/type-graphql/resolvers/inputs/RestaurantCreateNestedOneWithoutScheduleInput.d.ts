import { RestaurantCreateOrConnectWithoutScheduleInput } from "../inputs/RestaurantCreateOrConnectWithoutScheduleInput";
import { RestaurantUncheckedCreateWithoutScheduleInput } from "../inputs/RestaurantUncheckedCreateWithoutScheduleInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";
export declare class RestaurantCreateNestedOneWithoutScheduleInput {
    create?: RestaurantUncheckedCreateWithoutScheduleInput | undefined;
    connectOrCreate?: RestaurantCreateOrConnectWithoutScheduleInput | undefined;
    connect?: RestaurantWhereUniqueInput | undefined;
}
