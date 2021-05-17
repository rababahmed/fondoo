import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumSpiceLevelFieldUpdateOperationsInput } from "../inputs/EnumSpiceLevelFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { OrderUpdateOneWithoutItemsInput } from "../inputs/OrderUpdateOneWithoutItemsInput";
import { ProductUpdateOneRequiredWithoutOrderItemInput } from "../inputs/ProductUpdateOneRequiredWithoutOrderItemInput";
import { RestaurantUpdateOneWithoutOrderItemsInput } from "../inputs/RestaurantUpdateOneWithoutOrderItemsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class OrderItemUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    quantity?: IntFieldUpdateOperationsInput | undefined;
    total?: IntFieldUpdateOperationsInput | undefined;
    spiceLevel?: EnumSpiceLevelFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    product?: ProductUpdateOneRequiredWithoutOrderItemInput | undefined;
    Order?: OrderUpdateOneWithoutItemsInput | undefined;
    Restaurant?: RestaurantUpdateOneWithoutOrderItemsInput | undefined;
}
