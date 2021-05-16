import { RestaurantCreateOrConnectWithoutOrdersInput } from "../inputs/RestaurantCreateOrConnectWithoutOrdersInput";
import { RestaurantCreateWithoutOrdersInput } from "../inputs/RestaurantCreateWithoutOrdersInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";
export declare class RestaurantCreateNestedOneWithoutOrdersInput {
    create?: RestaurantCreateWithoutOrdersInput | undefined;
    connectOrCreate?: RestaurantCreateOrConnectWithoutOrdersInput | undefined;
    connect?: RestaurantWhereUniqueInput | undefined;
}
