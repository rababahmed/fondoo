import { RestaurantCreateOrConnectWithoutOrdersInput } from "../inputs/RestaurantCreateOrConnectWithoutOrdersInput";
import { RestaurantUncheckedCreateWithoutOrdersInput } from "../inputs/RestaurantUncheckedCreateWithoutOrdersInput";
import { RestaurantUncheckedUpdateWithoutOrdersInput } from "../inputs/RestaurantUncheckedUpdateWithoutOrdersInput";
import { RestaurantUpsertWithoutOrdersInput } from "../inputs/RestaurantUpsertWithoutOrdersInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";
export declare class RestaurantUpdateOneRequiredWithoutOrdersInput {
    create?: RestaurantUncheckedCreateWithoutOrdersInput | undefined;
    connectOrCreate?: RestaurantCreateOrConnectWithoutOrdersInput | undefined;
    upsert?: RestaurantUpsertWithoutOrdersInput | undefined;
    connect?: RestaurantWhereUniqueInput | undefined;
    update?: RestaurantUncheckedUpdateWithoutOrdersInput | undefined;
}
