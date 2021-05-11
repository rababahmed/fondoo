import { NestedEnumRoleFilter } from "../inputs/NestedEnumRoleFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumRoleWithAggregatesFilter {
    equals?: "Manager" | "Owner" | "Admin" | "SuperAdmin" | undefined;
    in?: Array<"Manager" | "Owner" | "Admin" | "SuperAdmin"> | undefined;
    notIn?: Array<"Manager" | "Owner" | "Admin" | "SuperAdmin"> | undefined;
    not?: NestedEnumRoleWithAggregatesFilter | undefined;
    count?: NestedIntFilter | undefined;
    min?: NestedEnumRoleFilter | undefined;
    max?: NestedEnumRoleFilter | undefined;
}
