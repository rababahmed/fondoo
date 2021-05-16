import { RestaurantCreateOrConnectWithoutCustomersInput } from "../inputs/RestaurantCreateOrConnectWithoutCustomersInput";
import { RestaurantUncheckedCreateWithoutCustomersInput } from "../inputs/RestaurantUncheckedCreateWithoutCustomersInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";
export declare class RestaurantCreateNestedOneWithoutCustomersInput {
    create?: RestaurantUncheckedCreateWithoutCustomersInput | undefined;
    connectOrCreate?: RestaurantCreateOrConnectWithoutCustomersInput | undefined;
    connect?: RestaurantWhereUniqueInput | undefined;
}
