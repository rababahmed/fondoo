import { ProductCategoryCreateNestedOneWithoutProductInput } from "../inputs/ProductCategoryCreateNestedOneWithoutProductInput";
import { RestaurantCreateNestedOneWithoutProductsInput } from "../inputs/RestaurantCreateNestedOneWithoutProductsInput";
export declare class ProductCreateWithoutOrderItemInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    name: string;
    description?: string | undefined;
    image?: string | undefined;
    price?: number | undefined;
    spiceLevel?: "None" | "Mild" | "Medium" | "Hot" | "ExtraHot" | undefined;
    isPopular?: boolean | undefined;
    isActive?: boolean | undefined;
    ProductCategory?: ProductCategoryCreateNestedOneWithoutProductInput | undefined;
    Restaurant?: RestaurantCreateNestedOneWithoutProductsInput | undefined;
}
