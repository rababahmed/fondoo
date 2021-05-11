import { CustomerAddressUpdateManyWithoutCustomerInput } from "../inputs/CustomerAddressUpdateManyWithoutCustomerInput";
import { CustomerTokenUpdateManyWithoutCustomerInput } from "../inputs/CustomerTokenUpdateManyWithoutCustomerInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { RestaurantUpdateOneWithoutCustomersInput } from "../inputs/RestaurantUpdateOneWithoutCustomersInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CustomerUpdateWithoutOrdersInput {
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    firstName?: StringFieldUpdateOperationsInput | undefined;
    lastName?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    password?: StringFieldUpdateOperationsInput | undefined;
    phone?: StringFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    token?: CustomerTokenUpdateManyWithoutCustomerInput | undefined;
    address?: CustomerAddressUpdateManyWithoutCustomerInput | undefined;
    Restaurant?: RestaurantUpdateOneWithoutCustomersInput | undefined;
}
