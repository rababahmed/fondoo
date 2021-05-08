import { UserTokenCreateNestedManyWithoutUserInput } from "../inputs/UserTokenCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutRestaurantsInput {
    createdAt?: Date | undefined;
    fullName: string;
    email: string;
    password: string;
    phone?: string | undefined;
    role?: "Cashier" | "Manager" | "Owner" | "Admin" | "SuperAdmin" | undefined;
    token?: UserTokenCreateNestedManyWithoutUserInput | undefined;
}
