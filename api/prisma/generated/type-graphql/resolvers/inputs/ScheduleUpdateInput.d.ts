import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { RestaurantUpdateOneWithoutSchedulesInput } from "../inputs/RestaurantUpdateOneWithoutSchedulesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ScheduleUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    day?: NullableStringFieldUpdateOperationsInput | undefined;
    openingTime?: NullableStringFieldUpdateOperationsInput | undefined;
    closingTime?: NullableStringFieldUpdateOperationsInput | undefined;
    minDeliveryAmount?: NullableIntFieldUpdateOperationsInput | undefined;
    deliveryTime?: NullableStringFieldUpdateOperationsInput | undefined;
    takeawayTime?: NullableStringFieldUpdateOperationsInput | undefined;
    Restaurant?: RestaurantUpdateOneWithoutSchedulesInput | undefined;
}
