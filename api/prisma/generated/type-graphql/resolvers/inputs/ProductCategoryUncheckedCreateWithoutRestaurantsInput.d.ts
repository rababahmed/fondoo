import { ProductUncheckedCreateNestedManyWithoutProductCategoryInput } from "../inputs/ProductUncheckedCreateNestedManyWithoutProductCategoryInput";
export declare class ProductCategoryUncheckedCreateWithoutRestaurantsInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    name: string;
    description?: string | undefined;
    image?: string | undefined;
    isActive?: boolean | undefined;
    isFeatured?: boolean | undefined;
    Product?: ProductUncheckedCreateNestedManyWithoutProductCategoryInput | undefined;
}
