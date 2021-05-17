import { EnumDiscountFieldUpdateOperationsInput } from "../inputs/EnumDiscountFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrderUpdateManyWithoutCouponInput } from "../inputs/OrderUpdateManyWithoutCouponInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CouponUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    code?: StringFieldUpdateOperationsInput | undefined;
    discount?: EnumDiscountFieldUpdateOperationsInput | undefined;
    value?: FloatFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    orders?: OrderUpdateManyWithoutCouponInput | undefined;
}
