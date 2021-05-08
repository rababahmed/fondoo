import { RestaurantCreateNestedManyWithoutUsersInput } from "../inputs/RestaurantCreateNestedManyWithoutUsersInput";
import { UserTokenCreateNestedManyWithoutUserInput } from "../inputs/UserTokenCreateNestedManyWithoutUserInput";
export declare class UserCreateInput {
    createdAt?: Date | undefined;
    fullName: string;
    email: string;
    password: string;
    phone?: string | undefined;
    role?: "Cashier" | "Manager" | "Owner" | "Admin" | "SuperAdmin" | undefined;
    token?: UserTokenCreateNestedManyWithoutUserInput | undefined;
    restaurants?: RestaurantCreateNestedManyWithoutUsersInput | undefined;
}
