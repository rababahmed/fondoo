import { CustomerUpdateOneWithoutOrdersInput } from "../inputs/CustomerUpdateOneWithoutOrdersInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { OrderElementUpdateManyWithoutOrderInput } from "../inputs/OrderElementUpdateManyWithoutOrderInput";
import { ProductUpdateManyWithoutOrderInput } from "../inputs/ProductUpdateManyWithoutOrderInput";
import { RestaurantUpdateOneWithoutOrdersInput } from "../inputs/RestaurantUpdateOneWithoutOrdersInput";
export declare class OrderUpdateWithoutCustomerAddressInput {
    charges?: NullableIntFieldUpdateOperationsInput | undefined;
    total?: NullableIntFieldUpdateOperationsInput | undefined;
    isAccepted?: NullableBoolFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    elements?: OrderElementUpdateManyWithoutOrderInput | undefined;
    restaurant?: RestaurantUpdateOneWithoutOrdersInput | undefined;
    customer?: CustomerUpdateOneWithoutOrdersInput | undefined;
    product?: ProductUpdateManyWithoutOrderInput | undefined;
}
