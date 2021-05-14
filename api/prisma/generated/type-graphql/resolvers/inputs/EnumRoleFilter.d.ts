import { NestedEnumRoleFilter } from "../inputs/NestedEnumRoleFilter";
export declare class EnumRoleFilter {
    equals?: "Manager" | "Owner" | "Admin" | "SuperAdmin" | undefined;
    in?: Array<"Manager" | "Owner" | "Admin" | "SuperAdmin"> | undefined;
    notIn?: Array<"Manager" | "Owner" | "Admin" | "SuperAdmin"> | undefined;
    not?: NestedEnumRoleFilter | undefined;
}
