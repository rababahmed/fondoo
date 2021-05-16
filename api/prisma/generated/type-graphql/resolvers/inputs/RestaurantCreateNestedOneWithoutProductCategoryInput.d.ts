import { RestaurantCreateOrConnectWithoutProductCategoryInput } from "../inputs/RestaurantCreateOrConnectWithoutProductCategoryInput";
import { RestaurantUncheckedCreateWithoutProductCategoryInput } from "../inputs/RestaurantUncheckedCreateWithoutProductCategoryInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";
export declare class RestaurantCreateNestedOneWithoutProductCategoryInput {
    create?: RestaurantUncheckedCreateWithoutProductCategoryInput | undefined;
    connectOrCreate?: RestaurantCreateOrConnectWithoutProductCategoryInput | undefined;
    connect?: RestaurantWhereUniqueInput | undefined;
}
