import { CartElementCreateNestedManyWithoutProductInput } from "../inputs/CartElementCreateNestedManyWithoutProductInput";
import { OrderCreateNestedOneWithoutProductInput } from "../inputs/OrderCreateNestedOneWithoutProductInput";
import { ProductCategoryCreateNestedOneWithoutProductInput } from "../inputs/ProductCategoryCreateNestedOneWithoutProductInput";
export declare class ProductCreateWithoutRestaurantInput {
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
    Order?: OrderCreateNestedOneWithoutProductInput | undefined;
    CartElement?: CartElementCreateNestedManyWithoutProductInput | undefined;
}
