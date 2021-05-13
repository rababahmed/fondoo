import { RestaurantCreateNestedOneWithoutProductsInput } from "../inputs/RestaurantCreateNestedOneWithoutProductsInput";
export declare class ProductCreateWithoutProductCategoryInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    name: string;
    description?: string | undefined;
    image?: string | undefined;
    price?: number | undefined;
    spiceLevel?: "None" | "Mild" | "Medium" | "Hot" | "ExtraHot" | undefined;
    isPopular?: boolean | undefined;
    isActive?: boolean | undefined;
    Restaurant?: RestaurantCreateNestedOneWithoutProductsInput | undefined;
}
