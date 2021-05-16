import { RestaurantCreateOrConnectWithoutCustomersInput } from "../inputs/RestaurantCreateOrConnectWithoutCustomersInput";
import { RestaurantCreateWithoutCustomersInput } from "../inputs/RestaurantCreateWithoutCustomersInput";
import { RestaurantUpdateWithoutCustomersInput } from "../inputs/RestaurantUpdateWithoutCustomersInput";
import { RestaurantUpsertWithoutCustomersInput } from "../inputs/RestaurantUpsertWithoutCustomersInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";
export declare class RestaurantUpdateOneWithoutCustomersInput {
    create?: RestaurantCreateWithoutCustomersInput | undefined;
    connectOrCreate?: RestaurantCreateOrConnectWithoutCustomersInput | undefined;
    upsert?: RestaurantUpsertWithoutCustomersInput | undefined;
    connect?: RestaurantWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: RestaurantUpdateWithoutCustomersInput | undefined;
}
