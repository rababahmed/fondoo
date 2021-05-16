import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { OrderUncheckedUpdateManyWithoutCustomerAddressInput } from "../inputs/OrderUncheckedUpdateManyWithoutCustomerAddressInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CustomerAddressUncheckedUpdateInput {
    id?: IntFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    streetAddress?: StringFieldUpdateOperationsInput | undefined;
    city?: StringFieldUpdateOperationsInput | undefined;
    postCode?: StringFieldUpdateOperationsInput | undefined;
    country?: StringFieldUpdateOperationsInput | undefined;
    customerId?: NullableIntFieldUpdateOperationsInput | undefined;
    Order?: OrderUncheckedUpdateManyWithoutCustomerAddressInput | undefined;
}
