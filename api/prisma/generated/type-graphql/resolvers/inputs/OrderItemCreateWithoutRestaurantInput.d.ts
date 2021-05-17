import { OrderCreateNestedOneWithoutItemsInput } from "../inputs/OrderCreateNestedOneWithoutItemsInput";
import { ProductCreateNestedOneWithoutOrderItemInput } from "../inputs/ProductCreateNestedOneWithoutOrderItemInput";
export declare class OrderItemCreateWithoutRestaurantInput {
    id?: string | undefined;
    quantity?: number | undefined;
    total: number;
    spiceLevel?: "None" | "Mild" | "Medium" | "Hot" | "ExtraHot" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    product: ProductCreateNestedOneWithoutOrderItemInput;
    Order?: OrderCreateNestedOneWithoutItemsInput | undefined;
}
