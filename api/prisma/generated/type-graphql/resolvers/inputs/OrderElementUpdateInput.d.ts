import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrderUpdateOneWithoutElementsInput } from "../inputs/OrderUpdateOneWithoutElementsInput";
import { ProductCategoryUpdateOneRequiredWithoutOrderElementInput } from "../inputs/ProductCategoryUpdateOneRequiredWithoutOrderElementInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class OrderElementUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    code?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    price?: IntFieldUpdateOperationsInput | undefined;
    addonText?: NullableStringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    category?: ProductCategoryUpdateOneRequiredWithoutOrderElementInput | undefined;
    Order?: OrderUpdateOneWithoutElementsInput | undefined;
}
