import { CustomerAddressUncheckedUpdateManyWithoutCustomerInput } from "../inputs/CustomerAddressUncheckedUpdateManyWithoutCustomerInput";
import { CustomerTokenUncheckedUpdateManyWithoutCustomerInput } from "../inputs/CustomerTokenUncheckedUpdateManyWithoutCustomerInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CustomerUncheckedUpdateWithoutOrdersInput {
    id?: IntFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    firstName?: StringFieldUpdateOperationsInput | undefined;
    lastName?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    password?: StringFieldUpdateOperationsInput | undefined;
    phone?: StringFieldUpdateOperationsInput | undefined;
    restaurantId?: NullableStringFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    token?: CustomerTokenUncheckedUpdateManyWithoutCustomerInput | undefined;
    address?: CustomerAddressUncheckedUpdateManyWithoutCustomerInput | undefined;
}
