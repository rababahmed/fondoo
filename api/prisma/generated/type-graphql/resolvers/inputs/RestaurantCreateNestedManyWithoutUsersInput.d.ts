import { RestaurantCreateOrConnectWithoutUsersInput } from "../inputs/RestaurantCreateOrConnectWithoutUsersInput";
import { RestaurantCreateWithoutUsersInput } from "../inputs/RestaurantCreateWithoutUsersInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";
export declare class RestaurantCreateNestedManyWithoutUsersInput {
    create?: RestaurantCreateWithoutUsersInput[] | undefined;
    connectOrCreate?: RestaurantCreateOrConnectWithoutUsersInput[] | undefined;
    connect?: RestaurantWhereUniqueInput[] | undefined;
}
