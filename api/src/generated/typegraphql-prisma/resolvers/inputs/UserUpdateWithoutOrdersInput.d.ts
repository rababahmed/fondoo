import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumRoleFieldUpdateOperationsInput } from "../inputs/EnumRoleFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { RestaurantUpdateOneWithoutUsersInput } from "../inputs/RestaurantUpdateOneWithoutUsersInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserTokenUpdateManyWithoutUserInput } from "../inputs/UserTokenUpdateManyWithoutUserInput";
export declare class UserUpdateWithoutOrdersInput {
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    fullName?: StringFieldUpdateOperationsInput | undefined;
    username?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    password?: StringFieldUpdateOperationsInput | undefined;
    phone?: NullableStringFieldUpdateOperationsInput | undefined;
    role?: EnumRoleFieldUpdateOperationsInput | undefined;
    token?: UserTokenUpdateManyWithoutUserInput | undefined;
    Restaurant?: RestaurantUpdateOneWithoutUsersInput | undefined;
}
