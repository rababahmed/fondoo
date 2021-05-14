import { ProductCreateNestedManyWithoutProductCategoryInput } from "../inputs/ProductCreateNestedManyWithoutProductCategoryInput";
export declare class ProductCategoryCreateWithoutRestaurantsInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    name: string;
    description?: string | undefined;
    image?: string | undefined;
    isActive?: boolean | undefined;
    isFeatured?: boolean | undefined;
    Product?: ProductCreateNestedManyWithoutProductCategoryInput | undefined;
}
