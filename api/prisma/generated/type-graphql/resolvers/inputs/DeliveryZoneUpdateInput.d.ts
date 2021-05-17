import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumDeliveryFeeFieldUpdateOperationsInput } from "../inputs/EnumDeliveryFeeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { RestaurantUpdateOneWithoutDeliveryZonesInput } from "../inputs/RestaurantUpdateOneWithoutDeliveryZonesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class DeliveryZoneUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    zoneTitle?: StringFieldUpdateOperationsInput | undefined;
    zonePostCode?: NullableStringFieldUpdateOperationsInput | undefined;
    deliveryFeeType?: EnumDeliveryFeeFieldUpdateOperationsInput | undefined;
    deliveryCharge?: IntFieldUpdateOperationsInput | undefined;
    minDeliveryAmount?: NullableIntFieldUpdateOperationsInput | undefined;
    minDeliveryRadius?: NullableIntFieldUpdateOperationsInput | undefined;
    maxDeliveryRadius?: NullableIntFieldUpdateOperationsInput | undefined;
    Restaurant?: RestaurantUpdateOneWithoutDeliveryZonesInput | undefined;
}
