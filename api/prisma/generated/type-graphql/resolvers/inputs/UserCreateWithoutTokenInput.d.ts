import { RestaurantCreateNestedManyWithoutUsersInput } from "../inputs/RestaurantCreateNestedManyWithoutUsersInput";
export declare class UserCreateWithoutTokenInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone?: string | undefined;
    role?: "Manager" | "Owner" | "Admin" | "SuperAdmin" | undefined;
    restaurants?: RestaurantCreateNestedManyWithoutUsersInput | undefined;
}
