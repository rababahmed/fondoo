import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class ScheduleUncheckedUpdateInput {
    id?: IntFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    openingTime?: NullableStringFieldUpdateOperationsInput | undefined;
    closingTime?: NullableStringFieldUpdateOperationsInput | undefined;
    minDeliveryAmount?: NullableIntFieldUpdateOperationsInput | undefined;
    deliveryTime?: NullableStringFieldUpdateOperationsInput | undefined;
    takeawayTime?: NullableStringFieldUpdateOperationsInput | undefined;
    restaurantId?: NullableStringFieldUpdateOperationsInput | undefined;
}
