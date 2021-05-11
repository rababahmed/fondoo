import { RestaurantCreateNestedOneWithoutUsersInput } from "../inputs/RestaurantCreateNestedOneWithoutUsersInput";
import { UserTokenCreateNestedManyWithoutUserInput } from "../inputs/UserTokenCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutOrdersInput {
    createdAt?: Date | undefined;
    fullName: string;
    username: string;
    email: string;
    password: string;
    phone?: string | undefined;
    role?: "Manager" | "Owner" | "Admin" | "SuperAdmin" | undefined;
    token?: UserTokenCreateNestedManyWithoutUserInput | undefined;
    Restaurant?: RestaurantCreateNestedOneWithoutUsersInput | undefined;
}
