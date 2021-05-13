import { OrderCreateNestedManyWithoutUserInput } from "../inputs/OrderCreateNestedManyWithoutUserInput";
import { UserTokenCreateNestedManyWithoutUserInput } from "../inputs/UserTokenCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutRestaurantInput {
    createdAt?: Date | undefined;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone?: string | undefined;
    role?: "Manager" | "Owner" | "Admin" | "SuperAdmin" | undefined;
    token?: UserTokenCreateNestedManyWithoutUserInput | undefined;
    orders?: OrderCreateNestedManyWithoutUserInput | undefined;
}
