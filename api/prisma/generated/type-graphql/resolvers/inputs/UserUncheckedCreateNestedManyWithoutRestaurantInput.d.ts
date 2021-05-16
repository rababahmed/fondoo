import { UserCreateManyRestaurantInputEnvelope } from "../inputs/UserCreateManyRestaurantInputEnvelope";
import { UserCreateOrConnectWithoutRestaurantInput } from "../inputs/UserCreateOrConnectWithoutRestaurantInput";
import { UserCreateWithoutRestaurantInput } from "../inputs/UserCreateWithoutRestaurantInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUncheckedCreateNestedManyWithoutRestaurantInput {
    create?: UserCreateWithoutRestaurantInput[] | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutRestaurantInput[] | undefined;
    createMany?: UserCreateManyRestaurantInputEnvelope | undefined;
    connect?: UserWhereUniqueInput[] | undefined;
}
