import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { RestaurantUpdateOneWithoutScheduleInput } from "../inputs/RestaurantUpdateOneWithoutScheduleInput";
export declare class ScheduleUpdateInput {
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    openingTime?: NullableStringFieldUpdateOperationsInput | undefined;
    closingTime?: NullableStringFieldUpdateOperationsInput | undefined;
    minDeliveryAmount?: NullableIntFieldUpdateOperationsInput | undefined;
    deliveryTime?: NullableStringFieldUpdateOperationsInput | undefined;
    takeawayTime?: NullableStringFieldUpdateOperationsInput | undefined;
    Restaurant?: RestaurantUpdateOneWithoutScheduleInput | undefined;
}
