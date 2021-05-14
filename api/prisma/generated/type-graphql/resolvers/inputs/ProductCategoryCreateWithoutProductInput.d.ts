import { RestaurantCreateNestedOneWithoutProductCategoryInput } from "../inputs/RestaurantCreateNestedOneWithoutProductCategoryInput";
export declare class ProductCategoryCreateWithoutProductInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    name: string;
    description?: string | undefined;
    image?: string | undefined;
    isActive?: boolean | undefined;
    isFeatured?: boolean | undefined;
    restaurants: RestaurantCreateNestedOneWithoutProductCategoryInput;
}
