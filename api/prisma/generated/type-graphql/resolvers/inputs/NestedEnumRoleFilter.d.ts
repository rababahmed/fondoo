export declare class NestedEnumRoleFilter {
    equals?: "Manager" | "Owner" | "Admin" | "SuperAdmin" | undefined;
    in?: Array<"Manager" | "Owner" | "Admin" | "SuperAdmin"> | undefined;
    notIn?: Array<"Manager" | "Owner" | "Admin" | "SuperAdmin"> | undefined;
    not?: NestedEnumRoleFilter | undefined;
}
