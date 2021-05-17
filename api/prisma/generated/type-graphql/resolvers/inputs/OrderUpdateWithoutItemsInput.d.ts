import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CouponUpdateOneWithoutOrdersInput } from "../inputs/CouponUpdateOneWithoutOrdersInput";
import { CustomerUpdateOneWithoutOrdersInput } from "../inputs/CustomerUpdateOneWithoutOrdersInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { RestaurantUpdateOneRequiredWithoutOrdersInput } from "../inputs/RestaurantUpdateOneRequiredWithoutOrdersInput";
export declare class OrderUpdateWithoutItemsInput {
    address?: NullableStringFieldUpdateOperationsInput | undefined;
    discount?: FloatFieldUpdateOperationsInput | undefined;
    deliveryCharges?: FloatFieldUpdateOperationsInput | undefined;
    vat?: FloatFieldUpdateOperationsInput | undefined;
    serviceCharge?: FloatFieldUpdateOperationsInput | undefined;
    total?: FloatFieldUpdateOperationsInput | undefined;
    isAccepted?: BoolFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    Coupon?: CouponUpdateOneWithoutOrdersInput | undefined;
    restaurant?: RestaurantUpdateOneRequiredWithoutOrdersInput | undefined;
    Customer?: CustomerUpdateOneWithoutOrdersInput | undefined;
}
