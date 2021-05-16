import { RestaurantCreateOrConnectWithoutProductsInput } from "../inputs/RestaurantCreateOrConnectWithoutProductsInput";
import { RestaurantCreateWithoutProductsInput } from "../inputs/RestaurantCreateWithoutProductsInput";
import { RestaurantUpdateWithoutProductsInput } from "../inputs/RestaurantUpdateWithoutProductsInput";
import { RestaurantUpsertWithoutProductsInput } from "../inputs/RestaurantUpsertWithoutProductsInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";
export declare class RestaurantUpdateOneWithoutProductsInput {
    create?: RestaurantCreateWithoutProductsInput | undefined;
    connectOrCreate?: RestaurantCreateOrConnectWithoutProductsInput | undefined;
    upsert?: RestaurantUpsertWithoutProductsInput | undefined;
    connect?: RestaurantWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: RestaurantUpdateWithoutProductsInput | undefined;
}
