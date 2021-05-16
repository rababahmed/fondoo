import { RestaurantCreateOrConnectWithoutProductsInput } from "../inputs/RestaurantCreateOrConnectWithoutProductsInput";
import { RestaurantUncheckedCreateWithoutProductsInput } from "../inputs/RestaurantUncheckedCreateWithoutProductsInput";
import { RestaurantUncheckedUpdateWithoutProductsInput } from "../inputs/RestaurantUncheckedUpdateWithoutProductsInput";
import { RestaurantUpsertWithoutProductsInput } from "../inputs/RestaurantUpsertWithoutProductsInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";
export declare class RestaurantUpdateOneWithoutProductsInput {
    create?: RestaurantUncheckedCreateWithoutProductsInput | undefined;
    connectOrCreate?: RestaurantCreateOrConnectWithoutProductsInput | undefined;
    upsert?: RestaurantUpsertWithoutProductsInput | undefined;
    connect?: RestaurantWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: RestaurantUncheckedUpdateWithoutProductsInput | undefined;
}
