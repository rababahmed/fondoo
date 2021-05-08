import { NestedEnumUserRoleFilter } from "../inputs/NestedEnumUserRoleFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumUserRoleWithAggregatesFilter {
    equals?: "Cashier" | "Manager" | "Owner" | "Admin" | "SuperAdmin" | undefined;
    in?: Array<"Cashier" | "Manager" | "Owner" | "Admin" | "SuperAdmin"> | undefined;
    notIn?: Array<"Cashier" | "Manager" | "Owner" | "Admin" | "SuperAdmin"> | undefined;
    not?: NestedEnumUserRoleWithAggregatesFilter | undefined;
    count?: NestedIntFilter | undefined;
    min?: NestedEnumUserRoleFilter | undefined;
    max?: NestedEnumUserRoleFilter | undefined;
}
