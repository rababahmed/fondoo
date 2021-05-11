import { RestaurantCreateOrConnectWithoutCustomersInput } from "../inputs/RestaurantCreateOrConnectWithoutCustomersInput";
import { RestaurantCreateWithoutCustomersInput } from "../inputs/RestaurantCreateWithoutCustomersInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";
export declare class RestaurantCreateNestedOneWithoutCustomersInput {
    create?: RestaurantCreateWithoutCustomersInput | undefined;
    connectOrCreate?: RestaurantCreateOrConnectWithoutCustomersInput | undefined;
    connect?: RestaurantWhereUniqueInput | undefined;
}
