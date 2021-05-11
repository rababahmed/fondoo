export declare class UserCreateManyRestaurantInput {
    id?: number | undefined;
    createdAt?: Date | undefined;
    fullName: string;
    username: string;
    email: string;
    password: string;
    phone?: string | undefined;
    role?: "Manager" | "Owner" | "Admin" | "SuperAdmin" | undefined;
}
