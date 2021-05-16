import { RestaurantCreateOrConnectWithoutProductsInput } from "../inputs/RestaurantCreateOrConnectWithoutProductsInput";
import { RestaurantCreateWithoutProductsInput } from "../inputs/RestaurantCreateWithoutProductsInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";
export declare class RestaurantCreateNestedOneWithoutProductsInput {
    create?: RestaurantCreateWithoutProductsInput | undefined;
    connectOrCreate?: RestaurantCreateOrConnectWithoutProductsInput | undefined;
    connect?: RestaurantWhereUniqueInput | undefined;
}
