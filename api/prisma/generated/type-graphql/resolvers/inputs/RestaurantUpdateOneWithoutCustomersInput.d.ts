import { RestaurantCreateOrConnectWithoutCustomersInput } from "../inputs/RestaurantCreateOrConnectWithoutCustomersInput";
import { RestaurantUncheckedCreateWithoutCustomersInput } from "../inputs/RestaurantUncheckedCreateWithoutCustomersInput";
import { RestaurantUncheckedUpdateWithoutCustomersInput } from "../inputs/RestaurantUncheckedUpdateWithoutCustomersInput";
import { RestaurantUpsertWithoutCustomersInput } from "../inputs/RestaurantUpsertWithoutCustomersInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";
export declare class RestaurantUpdateOneWithoutCustomersInput {
    create?: RestaurantUncheckedCreateWithoutCustomersInput | undefined;
    connectOrCreate?: RestaurantCreateOrConnectWithoutCustomersInput | undefined;
    upsert?: RestaurantUpsertWithoutCustomersInput | undefined;
    connect?: RestaurantWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: RestaurantUncheckedUpdateWithoutCustomersInput | undefined;
}
