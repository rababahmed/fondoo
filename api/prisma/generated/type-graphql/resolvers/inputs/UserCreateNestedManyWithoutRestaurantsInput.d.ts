import { UserCreateOrConnectWithoutRestaurantsInput } from "../inputs/UserCreateOrConnectWithoutRestaurantsInput";
import { UserCreateWithoutRestaurantsInput } from "../inputs/UserCreateWithoutRestaurantsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedManyWithoutRestaurantsInput {
    create?: UserCreateWithoutRestaurantsInput[] | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutRestaurantsInput[] | undefined;
    connect?: UserWhereUniqueInput[] | undefined;
}
