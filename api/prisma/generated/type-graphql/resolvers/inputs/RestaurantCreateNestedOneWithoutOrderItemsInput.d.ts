import { RestaurantCreateOrConnectWithoutOrderItemsInput } from "../inputs/RestaurantCreateOrConnectWithoutOrderItemsInput";
import { RestaurantCreateWithoutOrderItemsInput } from "../inputs/RestaurantCreateWithoutOrderItemsInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";
export declare class RestaurantCreateNestedOneWithoutOrderItemsInput {
    create?: RestaurantCreateWithoutOrderItemsInput | undefined;
    connectOrCreate?: RestaurantCreateOrConnectWithoutOrderItemsInput | undefined;
    connect?: RestaurantWhereUniqueInput | undefined;
}
