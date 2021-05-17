import { RestaurantCreateOrConnectWithoutUsersInput } from "../inputs/RestaurantCreateOrConnectWithoutUsersInput";
import { RestaurantCreateWithoutUsersInput } from "../inputs/RestaurantCreateWithoutUsersInput";
import { RestaurantScalarWhereInput } from "../inputs/RestaurantScalarWhereInput";
import { RestaurantUpdateManyWithWhereWithoutUsersInput } from "../inputs/RestaurantUpdateManyWithWhereWithoutUsersInput";
import { RestaurantUpdateWithWhereUniqueWithoutUsersInput } from "../inputs/RestaurantUpdateWithWhereUniqueWithoutUsersInput";
import { RestaurantUpsertWithWhereUniqueWithoutUsersInput } from "../inputs/RestaurantUpsertWithWhereUniqueWithoutUsersInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";
export declare class RestaurantUpdateManyWithoutUsersInput {
    create?: RestaurantCreateWithoutUsersInput[] | undefined;
    connectOrCreate?: RestaurantCreateOrConnectWithoutUsersInput[] | undefined;
    upsert?: RestaurantUpsertWithWhereUniqueWithoutUsersInput[] | undefined;
    connect?: RestaurantWhereUniqueInput[] | undefined;
    set?: RestaurantWhereUniqueInput[] | undefined;
    disconnect?: RestaurantWhereUniqueInput[] | undefined;
    delete?: RestaurantWhereUniqueInput[] | undefined;
    update?: RestaurantUpdateWithWhereUniqueWithoutUsersInput[] | undefined;
    updateMany?: RestaurantUpdateManyWithWhereWithoutUsersInput[] | undefined;
    deleteMany?: RestaurantScalarWhereInput[] | undefined;
}
