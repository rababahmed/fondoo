import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumDeliveryFeeFieldUpdateOperationsInput } from "../inputs/EnumDeliveryFeeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class DeliveryZoneUncheckedUpdateManyInput {
    id?: IntFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    zoneTitle?: StringFieldUpdateOperationsInput | undefined;
    zonePostCode?: NullableStringFieldUpdateOperationsInput | undefined;
    deliveryFeeType?: EnumDeliveryFeeFieldUpdateOperationsInput | undefined;
    deliveryCharge?: IntFieldUpdateOperationsInput | undefined;
    minDeliveryAmount?: NullableIntFieldUpdateOperationsInput | undefined;
    minDeliveryRadius?: NullableIntFieldUpdateOperationsInput | undefined;
    maxDeliveryRadius?: NullableIntFieldUpdateOperationsInput | undefined;
    restaurantId?: NullableStringFieldUpdateOperationsInput | undefined;
}
