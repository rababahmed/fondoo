import { RestaurantCreateOrConnectWithoutScheduleInput } from "../inputs/RestaurantCreateOrConnectWithoutScheduleInput";
import { RestaurantUncheckedCreateWithoutScheduleInput } from "../inputs/RestaurantUncheckedCreateWithoutScheduleInput";
import { RestaurantUncheckedUpdateWithoutScheduleInput } from "../inputs/RestaurantUncheckedUpdateWithoutScheduleInput";
import { RestaurantUpsertWithoutScheduleInput } from "../inputs/RestaurantUpsertWithoutScheduleInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";
export declare class RestaurantUpdateOneWithoutScheduleInput {
    create?: RestaurantUncheckedCreateWithoutScheduleInput | undefined;
    connectOrCreate?: RestaurantCreateOrConnectWithoutScheduleInput | undefined;
    upsert?: RestaurantUpsertWithoutScheduleInput | undefined;
    connect?: RestaurantWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: RestaurantUncheckedUpdateWithoutScheduleInput | undefined;
}
