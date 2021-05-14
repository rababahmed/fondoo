import { RestaurantCreateOrConnectWithoutUsersInput } from "../inputs/RestaurantCreateOrConnectWithoutUsersInput";
import { RestaurantCreateWithoutUsersInput } from "../inputs/RestaurantCreateWithoutUsersInput";
import { RestaurantUpdateWithoutUsersInput } from "../inputs/RestaurantUpdateWithoutUsersInput";
import { RestaurantUpsertWithoutUsersInput } from "../inputs/RestaurantUpsertWithoutUsersInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";
export declare class RestaurantUpdateOneWithoutUsersInput {
    create?: RestaurantCreateWithoutUsersInput | undefined;
    connectOrCreate?: RestaurantCreateOrConnectWithoutUsersInput | undefined;
    upsert?: RestaurantUpsertWithoutUsersInput | undefined;
    connect?: RestaurantWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: RestaurantUpdateWithoutUsersInput | undefined;
}
