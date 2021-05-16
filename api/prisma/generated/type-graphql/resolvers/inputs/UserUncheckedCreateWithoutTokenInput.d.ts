import { OrderUncheckedCreateNestedManyWithoutUserInput } from "../inputs/OrderUncheckedCreateNestedManyWithoutUserInput";
export declare class UserUncheckedCreateWithoutTokenInput {
    id?: number | undefined;
    createdAt?: Date | undefined;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone?: string | undefined;
    role?: "Manager" | "Owner" | "Admin" | "SuperAdmin" | undefined;
    restaurantId?: string | undefined;
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput | undefined;
}
