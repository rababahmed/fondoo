export declare class UserMinAggregate {
    id: string | null;
    createdAt: Date | null;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    password: string | null;
    phone: string | null;
    role: "Manager" | "Owner" | "Admin" | "SuperAdmin" | null;
}
