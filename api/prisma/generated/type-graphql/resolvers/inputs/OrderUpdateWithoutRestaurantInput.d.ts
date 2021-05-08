import { CustomerAddressUpdateOneRequiredWithoutOrderInput } from "../inputs/CustomerAddressUpdateOneRequiredWithoutOrderInput";
import { CustomerUpdateOneWithoutOrdersInput } from "../inputs/CustomerUpdateOneWithoutOrdersInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { OrderElementUpdateManyWithoutOrderInput } from "../inputs/OrderElementUpdateManyWithoutOrderInput";
import { ProductUpdateManyWithoutOrderInput } from "../inputs/ProductUpdateManyWithoutOrderInput";
export declare class OrderUpdateWithoutRestaurantInput {
    charges?: NullableIntFieldUpdateOperationsInput | undefined;
    total?: NullableIntFieldUpdateOperationsInput | undefined;
    isAccepted?: NullableBoolFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    elements?: OrderElementUpdateManyWithoutOrderInput | undefined;
    customerAddress?: CustomerAddressUpdateOneRequiredWithoutOrderInput | undefined;
    customer?: CustomerUpdateOneWithoutOrdersInput | undefined;
    product?: ProductUpdateManyWithoutOrderInput | undefined;
}
