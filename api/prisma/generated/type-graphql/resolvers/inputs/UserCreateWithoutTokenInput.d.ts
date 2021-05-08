import { RestaurantCreateNestedManyWithoutUsersInput } from "../inputs/RestaurantCreateNestedManyWithoutUsersInput";
export declare class UserCreateWithoutTokenInput {
    createdAt?: Date | undefined;
    fullName: string;
    email: string;
    password: string;
    phone?: string | undefined;
    role?: "Cashier" | "Manager" | "Owner" | "Admin" | "SuperAdmin" | undefined;
    restaurants?: RestaurantCreateNestedManyWithoutUsersInput | undefined;
}
