import { CustomerUpdateOneRequiredWithoutCartInput } from "../inputs/CustomerUpdateOneRequiredWithoutCartInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CartElementUpdateWithoutProductInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    quantity?: IntFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    customer?: CustomerUpdateOneRequiredWithoutCartInput | undefined;
}
