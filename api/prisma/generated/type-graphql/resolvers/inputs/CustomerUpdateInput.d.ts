import { CustomerAddressUpdateManyWithoutCustomerInput } from "../inputs/CustomerAddressUpdateManyWithoutCustomerInput";
import { CustomerTokenUpdateManyWithoutCustomerInput } from "../inputs/CustomerTokenUpdateManyWithoutCustomerInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { OrderUpdateManyWithoutCustomerInput } from "../inputs/OrderUpdateManyWithoutCustomerInput";
import { RestaurantUpdateManyWithoutCustomersInput } from "../inputs/RestaurantUpdateManyWithoutCustomersInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CustomerUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    firstName?: StringFieldUpdateOperationsInput | undefined;
    lastName?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    password?: StringFieldUpdateOperationsInput | undefined;
    phone?: StringFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    token?: CustomerTokenUpdateManyWithoutCustomerInput | undefined;
    addresses?: CustomerAddressUpdateManyWithoutCustomerInput | undefined;
    orders?: OrderUpdateManyWithoutCustomerInput | undefined;
    restaurants?: RestaurantUpdateManyWithoutCustomersInput | undefined;
}
