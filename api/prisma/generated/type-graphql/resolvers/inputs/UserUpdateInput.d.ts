import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumRoleFieldUpdateOperationsInput } from "../inputs/EnumRoleFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { RestaurantUpdateManyWithoutUsersInput } from "../inputs/RestaurantUpdateManyWithoutUsersInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserTokenUpdateManyWithoutUserInput } from "../inputs/UserTokenUpdateManyWithoutUserInput";
export declare class UserUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    firstName?: StringFieldUpdateOperationsInput | undefined;
    lastName?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    password?: StringFieldUpdateOperationsInput | undefined;
    phone?: NullableStringFieldUpdateOperationsInput | undefined;
    role?: EnumRoleFieldUpdateOperationsInput | undefined;
    token?: UserTokenUpdateManyWithoutUserInput | undefined;
    restaurants?: RestaurantUpdateManyWithoutUsersInput | undefined;
}
