import { OrderCreateNestedOneWithoutItemsInput } from "../inputs/OrderCreateNestedOneWithoutItemsInput";
import { ProductCreateNestedOneWithoutOrderItemInput } from "../inputs/ProductCreateNestedOneWithoutOrderItemInput";
import { RestaurantCreateNestedOneWithoutOrderItemsInput } from "../inputs/RestaurantCreateNestedOneWithoutOrderItemsInput";
export declare class OrderItemCreateInput {
    id?: string | undefined;
    quantity?: number | undefined;
    total: number;
    spiceLevel?: "None" | "Mild" | "Medium" | "Hot" | "ExtraHot" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    product: ProductCreateNestedOneWithoutOrderItemInput;
    Order?: OrderCreateNestedOneWithoutItemsInput | undefined;
    Restaurant?: RestaurantCreateNestedOneWithoutOrderItemsInput | undefined;
}
