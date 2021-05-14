import { RestaurantCreateOrConnectWithoutProductCategoryInput } from "../inputs/RestaurantCreateOrConnectWithoutProductCategoryInput";
import { RestaurantCreateWithoutProductCategoryInput } from "../inputs/RestaurantCreateWithoutProductCategoryInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";
export declare class RestaurantCreateNestedOneWithoutProductCategoryInput {
    create?: RestaurantCreateWithoutProductCategoryInput | undefined;
    connectOrCreate?: RestaurantCreateOrConnectWithoutProductCategoryInput | undefined;
    connect?: RestaurantWhereUniqueInput | undefined;
}
