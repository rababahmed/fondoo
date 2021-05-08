import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ProductUpdateOneRequiredWithoutCartElementInput } from "../inputs/ProductUpdateOneRequiredWithoutCartElementInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CartElementUpdateWithoutCustomerInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    quantity?: IntFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    product?: ProductUpdateOneRequiredWithoutCartElementInput | undefined;
}
