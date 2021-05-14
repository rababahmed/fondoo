import { RestaurantCreateOrConnectWithoutProductCategoryInput } from "../inputs/RestaurantCreateOrConnectWithoutProductCategoryInput";
import { RestaurantCreateWithoutProductCategoryInput } from "../inputs/RestaurantCreateWithoutProductCategoryInput";
import { RestaurantUpdateWithoutProductCategoryInput } from "../inputs/RestaurantUpdateWithoutProductCategoryInput";
import { RestaurantUpsertWithoutProductCategoryInput } from "../inputs/RestaurantUpsertWithoutProductCategoryInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";
export declare class RestaurantUpdateOneRequiredWithoutProductCategoryInput {
    create?: RestaurantCreateWithoutProductCategoryInput | undefined;
    connectOrCreate?: RestaurantCreateOrConnectWithoutProductCategoryInput | undefined;
    upsert?: RestaurantUpsertWithoutProductCategoryInput | undefined;
    connect?: RestaurantWhereUniqueInput | undefined;
    update?: RestaurantUpdateWithoutProductCategoryInput | undefined;
}
