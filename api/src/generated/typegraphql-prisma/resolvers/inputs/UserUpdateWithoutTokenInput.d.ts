import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumRoleFieldUpdateOperationsInput } from "../inputs/EnumRoleFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrderUpdateManyWithoutUserInput } from "../inputs/OrderUpdateManyWithoutUserInput";
import { RestaurantUpdateOneWithoutUsersInput } from "../inputs/RestaurantUpdateOneWithoutUsersInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class UserUpdateWithoutTokenInput {
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    fullName?: StringFieldUpdateOperationsInput | undefined;
    username?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    password?: StringFieldUpdateOperationsInput | undefined;
    phone?: NullableStringFieldUpdateOperationsInput | undefined;
    role?: EnumRoleFieldUpdateOperationsInput | undefined;
    Restaurant?: RestaurantUpdateOneWithoutUsersInput | undefined;
    orders?: OrderUpdateManyWithoutUserInput | undefined;
}
