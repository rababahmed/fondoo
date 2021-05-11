import { OrderCreateNestedManyWithoutUserInput } from "../inputs/OrderCreateNestedManyWithoutUserInput";
import { RestaurantCreateNestedOneWithoutUsersInput } from "../inputs/RestaurantCreateNestedOneWithoutUsersInput";
export declare class UserCreateWithoutTokenInput {
    createdAt?: Date | undefined;
    fullName: string;
    username: string;
    email: string;
    password: string;
    phone?: string | undefined;
    role?: "Manager" | "Owner" | "Admin" | "SuperAdmin" | undefined;
    Restaurant?: RestaurantCreateNestedOneWithoutUsersInput | undefined;
    orders?: OrderCreateNestedManyWithoutUserInput | undefined;
}
