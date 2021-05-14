import { CustomerUpdateOneWithoutAddressInput } from "../inputs/CustomerUpdateOneWithoutAddressInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { OrderUpdateManyWithoutCustomerAddressInput } from "../inputs/OrderUpdateManyWithoutCustomerAddressInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CustomerAddressUpdateInput {
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    streetAddress?: StringFieldUpdateOperationsInput | undefined;
    city?: StringFieldUpdateOperationsInput | undefined;
    postCode?: StringFieldUpdateOperationsInput | undefined;
    country?: StringFieldUpdateOperationsInput | undefined;
    Customer?: CustomerUpdateOneWithoutAddressInput | undefined;
    Order?: OrderUpdateManyWithoutCustomerAddressInput | undefined;
}
