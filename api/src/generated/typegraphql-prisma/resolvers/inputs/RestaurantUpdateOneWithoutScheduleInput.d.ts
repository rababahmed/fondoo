import { RestaurantCreateOrConnectWithoutScheduleInput } from "../inputs/RestaurantCreateOrConnectWithoutScheduleInput";
import { RestaurantCreateWithoutScheduleInput } from "../inputs/RestaurantCreateWithoutScheduleInput";
import { RestaurantUpdateWithoutScheduleInput } from "../inputs/RestaurantUpdateWithoutScheduleInput";
import { RestaurantUpsertWithoutScheduleInput } from "../inputs/RestaurantUpsertWithoutScheduleInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";
export declare class RestaurantUpdateOneWithoutScheduleInput {
    create?: RestaurantCreateWithoutScheduleInput | undefined;
    connectOrCreate?: RestaurantCreateOrConnectWithoutScheduleInput | undefined;
    upsert?: RestaurantUpsertWithoutScheduleInput | undefined;
    connect?: RestaurantWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: RestaurantUpdateWithoutScheduleInput | undefined;
}
