import { RestaurantCreateOrConnectWithoutUsersInput } from "../inputs/RestaurantCreateOrConnectWithoutUsersInput";
import { RestaurantUncheckedCreateWithoutUsersInput } from "../inputs/RestaurantUncheckedCreateWithoutUsersInput";
import { RestaurantUncheckedUpdateWithoutUsersInput } from "../inputs/RestaurantUncheckedUpdateWithoutUsersInput";
import { RestaurantUpsertWithoutUsersInput } from "../inputs/RestaurantUpsertWithoutUsersInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";
export declare class RestaurantUpdateOneWithoutUsersInput {
    create?: RestaurantUncheckedCreateWithoutUsersInput | undefined;
    connectOrCreate?: RestaurantCreateOrConnectWithoutUsersInput | undefined;
    upsert?: RestaurantUpsertWithoutUsersInput | undefined;
    connect?: RestaurantWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: RestaurantUncheckedUpdateWithoutUsersInput | undefined;
}
