import { RestaurantCreateOrConnectWithoutOrdersInput } from "../inputs/RestaurantCreateOrConnectWithoutOrdersInput";
import { RestaurantUncheckedCreateWithoutOrdersInput } from "../inputs/RestaurantUncheckedCreateWithoutOrdersInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";
export declare class RestaurantCreateNestedOneWithoutOrdersInput {
    create?: RestaurantUncheckedCreateWithoutOrdersInput | undefined;
    connectOrCreate?: RestaurantCreateOrConnectWithoutOrdersInput | undefined;
    connect?: RestaurantWhereUniqueInput | undefined;
}
