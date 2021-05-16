import { UserCreateManyRestaurantInputEnvelope } from "../inputs/UserCreateManyRestaurantInputEnvelope";
import { UserCreateOrConnectWithoutRestaurantInput } from "../inputs/UserCreateOrConnectWithoutRestaurantInput";
import { UserCreateWithoutRestaurantInput } from "../inputs/UserCreateWithoutRestaurantInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutRestaurantInput } from "../inputs/UserUpdateManyWithWhereWithoutRestaurantInput";
import { UserUpdateWithWhereUniqueWithoutRestaurantInput } from "../inputs/UserUpdateWithWhereUniqueWithoutRestaurantInput";
import { UserUpsertWithWhereUniqueWithoutRestaurantInput } from "../inputs/UserUpsertWithWhereUniqueWithoutRestaurantInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUncheckedUpdateManyWithoutRestaurantInput {
    create?: UserCreateWithoutRestaurantInput[] | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutRestaurantInput[] | undefined;
    upsert?: UserUpsertWithWhereUniqueWithoutRestaurantInput[] | undefined;
    createMany?: UserCreateManyRestaurantInputEnvelope | undefined;
    connect?: UserWhereUniqueInput[] | undefined;
    set?: UserWhereUniqueInput[] | undefined;
    disconnect?: UserWhereUniqueInput[] | undefined;
    delete?: UserWhereUniqueInput[] | undefined;
    update?: UserUpdateWithWhereUniqueWithoutRestaurantInput[] | undefined;
    updateMany?: UserUpdateManyWithWhereWithoutRestaurantInput[] | undefined;
    deleteMany?: UserScalarWhereInput[] | undefined;
}
