import { OrderElementCreateNestedManyWithoutCategoryInput } from "../inputs/OrderElementCreateNestedManyWithoutCategoryInput";
import { ProductCreateNestedManyWithoutCategoryInput } from "../inputs/ProductCreateNestedManyWithoutCategoryInput";
export declare class ProductCategoryCreateWithoutRestaurantsInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    name: string;
    description?: string | undefined;
    image?: string | undefined;
    isActive?: boolean | undefined;
    isFeatured?: boolean | undefined;
    Product?: ProductCreateNestedManyWithoutCategoryInput | undefined;
    OrderElement?: OrderElementCreateNestedManyWithoutCategoryInput | undefined;
}
