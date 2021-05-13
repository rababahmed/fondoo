import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumRoleFieldUpdateOperationsInput } from "../inputs/EnumRoleFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrderUpdateManyWithoutUserInput } from "../inputs/OrderUpdateManyWithoutUserInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserTokenUpdateManyWithoutUserInput } from "../inputs/UserTokenUpdateManyWithoutUserInput";
export declare class UserUpdateWithoutRestaurantInput {
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    firstName?: StringFieldUpdateOperationsInput | undefined;
    lastName?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    password?: StringFieldUpdateOperationsInput | undefined;
    phone?: NullableStringFieldUpdateOperationsInput | undefined;
    role?: EnumRoleFieldUpdateOperationsInput | undefined;
    token?: UserTokenUpdateManyWithoutUserInput | undefined;
    orders?: OrderUpdateManyWithoutUserInput | undefined;
}
