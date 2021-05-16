import { OrderUncheckedCreateNestedManyWithoutUserInput } from "../inputs/OrderUncheckedCreateNestedManyWithoutUserInput";
import { UserTokenUncheckedCreateNestedManyWithoutUserInput } from "../inputs/UserTokenUncheckedCreateNestedManyWithoutUserInput";
export declare class UserUncheckedCreateWithoutRestaurantInput {
    id?: number | undefined;
    createdAt?: Date | undefined;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone?: string | undefined;
    role?: "Manager" | "Owner" | "Admin" | "SuperAdmin" | undefined;
    token?: UserTokenUncheckedCreateNestedManyWithoutUserInput | undefined;
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput | undefined;
}
