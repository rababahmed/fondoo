import { OrderCreateNestedOneWithoutItemsInput } from "../inputs/OrderCreateNestedOneWithoutItemsInput";
import { RestaurantCreateNestedOneWithoutOrderItemsInput } from "../inputs/RestaurantCreateNestedOneWithoutOrderItemsInput";
export declare class OrderItemCreateWithoutProductInput {
    id?: string | undefined;
    quantity?: number | undefined;
    total: number;
    spiceLevel?: "None" | "Mild" | "Medium" | "Hot" | "ExtraHot" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    Order?: OrderCreateNestedOneWithoutItemsInput | undefined;
    Restaurant?: RestaurantCreateNestedOneWithoutOrderItemsInput | undefined;
}
