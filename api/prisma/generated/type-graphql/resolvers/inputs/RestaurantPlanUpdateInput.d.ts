import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { RestaurantUpdateManyWithoutPlanInput } from "../inputs/RestaurantUpdateManyWithoutPlanInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class RestaurantPlanUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    price?: FloatFieldUpdateOperationsInput | undefined;
    isActive?: BoolFieldUpdateOperationsInput | undefined;
    restaurants?: RestaurantUpdateManyWithoutPlanInput | undefined;
}
