import { RestaurantCreateOrConnectWithoutProductsInput } from "../inputs/RestaurantCreateOrConnectWithoutProductsInput";
import { RestaurantUncheckedCreateWithoutProductsInput } from "../inputs/RestaurantUncheckedCreateWithoutProductsInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";
export declare class RestaurantCreateNestedOneWithoutProductsInput {
    create?: RestaurantUncheckedCreateWithoutProductsInput | undefined;
    connectOrCreate?: RestaurantCreateOrConnectWithoutProductsInput | undefined;
    connect?: RestaurantWhereUniqueInput | undefined;
}
