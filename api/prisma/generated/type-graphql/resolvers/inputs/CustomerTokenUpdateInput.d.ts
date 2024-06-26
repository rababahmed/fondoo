import { CustomerUpdateOneWithoutTokenInput } from "../inputs/CustomerUpdateOneWithoutTokenInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CustomerTokenUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    token?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    Customer?: CustomerUpdateOneWithoutTokenInput | undefined;
}
