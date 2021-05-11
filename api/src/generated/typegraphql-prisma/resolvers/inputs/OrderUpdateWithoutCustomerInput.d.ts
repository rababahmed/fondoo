import { Prisma } from "@prisma/client";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CustomerAddressUpdateOneWithoutOrderInput } from "../inputs/CustomerAddressUpdateOneWithoutOrderInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { RestaurantUpdateOneRequiredWithoutOrdersInput } from "../inputs/RestaurantUpdateOneRequiredWithoutOrdersInput";
import { UserUpdateOneRequiredWithoutOrdersInput } from "../inputs/UserUpdateOneRequiredWithoutOrdersInput";
export declare class OrderUpdateWithoutCustomerInput {
    items?: Prisma.InputJsonValue | undefined;
    coupon?: NullableStringFieldUpdateOperationsInput | undefined;
    deliveryCharges?: FloatFieldUpdateOperationsInput | undefined;
    vat?: FloatFieldUpdateOperationsInput | undefined;
    serviceCharge?: FloatFieldUpdateOperationsInput | undefined;
    total?: FloatFieldUpdateOperationsInput | undefined;
    isAccepted?: BoolFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutOrdersInput | undefined;
    restaurant?: RestaurantUpdateOneRequiredWithoutOrdersInput | undefined;
    CustomerAddress?: CustomerAddressUpdateOneWithoutOrderInput | undefined;
}
