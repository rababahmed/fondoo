import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { OrderUpdateManyWithoutCustomerAddressInput } from "../inputs/OrderUpdateManyWithoutCustomerAddressInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CustomerAddressUpdateWithoutCustomerInput {
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    streetAddress?: StringFieldUpdateOperationsInput | undefined;
    city?: StringFieldUpdateOperationsInput | undefined;
    postCode?: StringFieldUpdateOperationsInput | undefined;
    country?: StringFieldUpdateOperationsInput | undefined;
    Order?: OrderUpdateManyWithoutCustomerAddressInput | undefined;
}
