import { RestaurantCreateOrConnectWithoutOrderItemsInput } from "../inputs/RestaurantCreateOrConnectWithoutOrderItemsInput";
import { RestaurantCreateWithoutOrderItemsInput } from "../inputs/RestaurantCreateWithoutOrderItemsInput";
import { RestaurantUpdateWithoutOrderItemsInput } from "../inputs/RestaurantUpdateWithoutOrderItemsInput";
import { RestaurantUpsertWithoutOrderItemsInput } from "../inputs/RestaurantUpsertWithoutOrderItemsInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";
export declare class RestaurantUpdateOneWithoutOrderItemsInput {
    create?: RestaurantCreateWithoutOrderItemsInput | undefined;
    connectOrCreate?: RestaurantCreateOrConnectWithoutOrderItemsInput | undefined;
    upsert?: RestaurantUpsertWithoutOrderItemsInput | undefined;
    connect?: RestaurantWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: RestaurantUpdateWithoutOrderItemsInput | undefined;
}
