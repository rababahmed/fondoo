import { RestaurantCreateOrConnectWithoutUsersInput } from "../inputs/RestaurantCreateOrConnectWithoutUsersInput";
import { RestaurantUncheckedCreateWithoutUsersInput } from "../inputs/RestaurantUncheckedCreateWithoutUsersInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";
export declare class RestaurantCreateNestedOneWithoutUsersInput {
    create?: RestaurantUncheckedCreateWithoutUsersInput | undefined;
    connectOrCreate?: RestaurantCreateOrConnectWithoutUsersInput | undefined;
    connect?: RestaurantWhereUniqueInput | undefined;
}
