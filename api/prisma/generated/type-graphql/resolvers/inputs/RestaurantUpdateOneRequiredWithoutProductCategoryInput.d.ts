import { RestaurantCreateOrConnectWithoutProductCategoryInput } from "../inputs/RestaurantCreateOrConnectWithoutProductCategoryInput";
import { RestaurantUncheckedCreateWithoutProductCategoryInput } from "../inputs/RestaurantUncheckedCreateWithoutProductCategoryInput";
import { RestaurantUncheckedUpdateWithoutProductCategoryInput } from "../inputs/RestaurantUncheckedUpdateWithoutProductCategoryInput";
import { RestaurantUpsertWithoutProductCategoryInput } from "../inputs/RestaurantUpsertWithoutProductCategoryInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";
export declare class RestaurantUpdateOneRequiredWithoutProductCategoryInput {
    create?: RestaurantUncheckedCreateWithoutProductCategoryInput | undefined;
    connectOrCreate?: RestaurantCreateOrConnectWithoutProductCategoryInput | undefined;
    upsert?: RestaurantUpsertWithoutProductCategoryInput | undefined;
    connect?: RestaurantWhereUniqueInput | undefined;
    update?: RestaurantUncheckedUpdateWithoutProductCategoryInput | undefined;
}
