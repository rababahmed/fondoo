import { ProductCreateNestedManyWithoutProductCategoryInput } from "../inputs/ProductCreateNestedManyWithoutProductCategoryInput";
import { RestaurantCreateNestedOneWithoutProductCategoryInput } from "../inputs/RestaurantCreateNestedOneWithoutProductCategoryInput";
export declare class ProductCategoryCreateInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    name: string;
    description?: string | undefined;
    image?: string | undefined;
    isActive?: boolean | undefined;
    isFeatured?: boolean | undefined;
    restaurants: RestaurantCreateNestedOneWithoutProductCategoryInput;
    Product?: ProductCreateNestedManyWithoutProductCategoryInput | undefined;
}
