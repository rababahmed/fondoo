import { RestaurantCreateOrConnectWithoutOrdersInput } from "../inputs/RestaurantCreateOrConnectWithoutOrdersInput";
import { RestaurantCreateWithoutOrdersInput } from "../inputs/RestaurantCreateWithoutOrdersInput";
import { RestaurantUpdateWithoutOrdersInput } from "../inputs/RestaurantUpdateWithoutOrdersInput";
import { RestaurantUpsertWithoutOrdersInput } from "../inputs/RestaurantUpsertWithoutOrdersInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";
export declare class RestaurantUpdateOneRequiredWithoutOrdersInput {
    create?: RestaurantCreateWithoutOrdersInput | undefined;
    connectOrCreate?: RestaurantCreateOrConnectWithoutOrdersInput | undefined;
    upsert?: RestaurantUpsertWithoutOrdersInput | undefined;
    connect?: RestaurantWhereUniqueInput | undefined;
    update?: RestaurantUpdateWithoutOrdersInput | undefined;
}
