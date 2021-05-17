import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CouponUpdateOneWithoutOrdersInput } from "../inputs/CouponUpdateOneWithoutOrdersInput";
import { CustomerUpdateOneWithoutOrdersInput } from "../inputs/CustomerUpdateOneWithoutOrdersInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrderItemUpdateManyWithoutOrderInput } from "../inputs/OrderItemUpdateManyWithoutOrderInput";
export declare class OrderUpdateWithoutRestaurantInput {
    address?: NullableStringFieldUpdateOperationsInput | undefined;
    discount?: FloatFieldUpdateOperationsInput | undefined;
    deliveryCharges?: FloatFieldUpdateOperationsInput | undefined;
    vat?: FloatFieldUpdateOperationsInput | undefined;
    serviceCharge?: FloatFieldUpdateOperationsInput | undefined;
    total?: FloatFieldUpdateOperationsInput | undefined;
    isAccepted?: BoolFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    items?: OrderItemUpdateManyWithoutOrderInput | undefined;
    Coupon?: CouponUpdateOneWithoutOrdersInput | undefined;
    Customer?: CustomerUpdateOneWithoutOrdersInput | undefined;
}
