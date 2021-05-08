import { CustomerAddressUpdateOneRequiredWithoutOrderInput } from "../inputs/CustomerAddressUpdateOneRequiredWithoutOrderInput";
import { CustomerUpdateOneWithoutOrdersInput } from "../inputs/CustomerUpdateOneWithoutOrdersInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { ProductUpdateManyWithoutOrderInput } from "../inputs/ProductUpdateManyWithoutOrderInput";
import { RestaurantUpdateOneWithoutOrdersInput } from "../inputs/RestaurantUpdateOneWithoutOrdersInput";
export declare class OrderUpdateWithoutElementsInput {
    charges?: NullableIntFieldUpdateOperationsInput | undefined;
    total?: NullableIntFieldUpdateOperationsInput | undefined;
    isAccepted?: NullableBoolFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    customerAddress?: CustomerAddressUpdateOneRequiredWithoutOrderInput | undefined;
    restaurant?: RestaurantUpdateOneWithoutOrdersInput | undefined;
    customer?: CustomerUpdateOneWithoutOrdersInput | undefined;
    product?: ProductUpdateManyWithoutOrderInput | undefined;
}
