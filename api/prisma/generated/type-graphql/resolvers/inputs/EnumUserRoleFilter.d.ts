import { NestedEnumUserRoleFilter } from "../inputs/NestedEnumUserRoleFilter";
export declare class EnumUserRoleFilter {
    equals?: "Cashier" | "Manager" | "Owner" | "Admin" | "SuperAdmin" | undefined;
    in?: Array<"Cashier" | "Manager" | "Owner" | "Admin" | "SuperAdmin"> | undefined;
    notIn?: Array<"Cashier" | "Manager" | "Owner" | "Admin" | "SuperAdmin"> | undefined;
    not?: NestedEnumUserRoleFilter | undefined;
}
