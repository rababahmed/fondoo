import { CartElementCreateNestedManyWithoutProductInput } from "../inputs/CartElementCreateNestedManyWithoutProductInput";
import { ProductCategoryCreateNestedOneWithoutProductInput } from "../inputs/ProductCategoryCreateNestedOneWithoutProductInput";
import { RestaurantCreateNestedOneWithoutProductsInput } from "../inputs/RestaurantCreateNestedOneWithoutProductsInput";
export declare class ProductCreateWithoutOrderInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    name: string;
    description?: string | undefined;
    image?: string | undefined;
    price?: number | undefined;
    spiceLevel?: "None" | "Mild" | "Medium" | "Hot" | "ExtraHot" | undefined;
    isPopular?: boolean | undefined;
    isActive?: boolean | undefined;
    category: ProductCategoryCreateNestedOneWithoutProductInput;
    Restaurant?: RestaurantCreateNestedOneWithoutProductsInput | undefined;
    CartElement?: CartElementCreateNestedManyWithoutProductInput | undefined;
}
