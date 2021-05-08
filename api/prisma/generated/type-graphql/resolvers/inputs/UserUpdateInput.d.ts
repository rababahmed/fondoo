import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumUserRoleFieldUpdateOperationsInput } from "../inputs/EnumUserRoleFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { RestaurantUpdateManyWithoutUsersInput } from "../inputs/RestaurantUpdateManyWithoutUsersInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserTokenUpdateManyWithoutUserInput } from "../inputs/UserTokenUpdateManyWithoutUserInput";
export declare class UserUpdateInput {
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    fullName?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    password?: StringFieldUpdateOperationsInput | undefined;
    phone?: NullableStringFieldUpdateOperationsInput | undefined;
    role?: EnumUserRoleFieldUpdateOperationsInput | undefined;
    token?: UserTokenUpdateManyWithoutUserInput | undefined;
    restaurants?: RestaurantUpdateManyWithoutUsersInput | undefined;
}
