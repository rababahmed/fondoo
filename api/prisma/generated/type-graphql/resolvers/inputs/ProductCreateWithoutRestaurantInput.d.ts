import { OrderItemCreateNestedManyWithoutProductInput } from "../inputs/OrderItemCreateNestedManyWithoutProductInput";
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
    ProductCategory?: ProductCategoryCreateNestedOneWithoutProductInput | undefined;
    OrderItem?: OrderItemCreateNestedManyWithoutProductInput | undefined;
}
