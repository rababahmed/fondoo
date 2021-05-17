import { UserCreateOrConnectWithoutRestaurantsInput } from "../inputs/UserCreateOrConnectWithoutRestaurantsInput";
import { UserCreateWithoutRestaurantsInput } from "../inputs/UserCreateWithoutRestaurantsInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutRestaurantsInput } from "../inputs/UserUpdateManyWithWhereWithoutRestaurantsInput";
import { UserUpdateWithWhereUniqueWithoutRestaurantsInput } from "../inputs/UserUpdateWithWhereUniqueWithoutRestaurantsInput";
import { UserUpsertWithWhereUniqueWithoutRestaurantsInput } from "../inputs/UserUpsertWithWhereUniqueWithoutRestaurantsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateManyWithoutRestaurantsInput {
    create?: UserCreateWithoutRestaurantsInput[] | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutRestaurantsInput[] | undefined;
    upsert?: UserUpsertWithWhereUniqueWithoutRestaurantsInput[] | undefined;
    connect?: UserWhereUniqueInput[] | undefined;
    set?: UserWhereUniqueInput[] | undefined;
    disconnect?: UserWhereUniqueInput[] | undefined;
    delete?: UserWhereUniqueInput[] | undefined;
    update?: UserUpdateWithWhereUniqueWithoutRestaurantsInput[] | undefined;
    updateMany?: UserUpdateManyWithWhereWithoutRestaurantsInput[] | undefined;
    deleteMany?: UserScalarWhereInput[] | undefined;
}
