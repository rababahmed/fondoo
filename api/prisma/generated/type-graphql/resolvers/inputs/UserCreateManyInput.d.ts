export declare class UserCreateManyInput {
    id?: number | undefined;
    createdAt?: Date | undefined;
    fullName: string;
    email: string;
    password: string;
    phone?: string | undefined;
    role?: "Cashier" | "Manager" | "Owner" | "Admin" | "SuperAdmin" | undefined;
}
