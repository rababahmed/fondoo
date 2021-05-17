import { RestaurantCreateOrConnectWithoutSchedulesInput } from "../inputs/RestaurantCreateOrConnectWithoutSchedulesInput";
import { RestaurantCreateWithoutSchedulesInput } from "../inputs/RestaurantCreateWithoutSchedulesInput";
import { RestaurantUpdateWithoutSchedulesInput } from "../inputs/RestaurantUpdateWithoutSchedulesInput";
import { RestaurantUpsertWithoutSchedulesInput } from "../inputs/RestaurantUpsertWithoutSchedulesInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";
export declare class RestaurantUpdateOneWithoutSchedulesInput {
    create?: RestaurantCreateWithoutSchedulesInput | undefined;
    connectOrCreate?: RestaurantCreateOrConnectWithoutSchedulesInput | undefined;
    upsert?: RestaurantUpsertWithoutSchedulesInput | undefined;
    connect?: RestaurantWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: RestaurantUpdateWithoutSchedulesInput | undefined;
}
