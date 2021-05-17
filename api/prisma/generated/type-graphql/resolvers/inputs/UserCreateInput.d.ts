import { RestaurantCreateNestedManyWithoutUsersInput } from "../inputs/RestaurantCreateNestedManyWithoutUsersInput";
import { UserTokenCreateNestedManyWithoutUserInput } from "../inputs/UserTokenCreateNestedManyWithoutUserInput";
export declare class UserCreateInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone?: string | undefined;
    role?: "Manager" | "Owner" | "Admin" | "SuperAdmin" | undefined;
    token?: UserTokenCreateNestedManyWithoutUserInput | undefined;
    restaurants?: RestaurantCreateNestedManyWithoutUsersInput | undefined;
}
