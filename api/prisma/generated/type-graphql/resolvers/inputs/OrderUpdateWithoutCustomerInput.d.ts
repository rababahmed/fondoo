import { CustomerAddressUpdateOneRequiredWithoutOrderInput } from "../inputs/CustomerAddressUpdateOneRequiredWithoutOrderInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { OrderElementUpdateManyWithoutOrderInput } from "../inputs/OrderElementUpdateManyWithoutOrderInput";
import { ProductUpdateManyWithoutOrderInput } from "../inputs/ProductUpdateManyWithoutOrderInput";
import { RestaurantUpdateOneWithoutOrdersInput } from "../inputs/RestaurantUpdateOneWithoutOrdersInput";
export declare class OrderUpdateWithoutCustomerInput {
    charges?: NullableIntFieldUpdateOperationsInput | undefined;
    total?: NullableIntFieldUpdateOperationsInput | undefined;
    isAccepted?: NullableBoolFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    elements?: OrderElementUpdateManyWithoutOrderInput | undefined;
    customerAddress?: CustomerAddressUpdateOneRequiredWithoutOrderInput | undefined;
    restaurant?: RestaurantUpdateOneWithoutOrdersInput | undefined;
    product?: ProductUpdateManyWithoutOrderInput | undefined;
}
