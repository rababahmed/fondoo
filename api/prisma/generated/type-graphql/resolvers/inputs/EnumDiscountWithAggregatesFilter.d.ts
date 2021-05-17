import { NestedEnumDiscountFilter } from "../inputs/NestedEnumDiscountFilter";
import { NestedEnumDiscountWithAggregatesFilter } from "../inputs/NestedEnumDiscountWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumDiscountWithAggregatesFilter {
    equals?: "Fixed" | "Percent" | undefined;
    in?: Array<"Fixed" | "Percent"> | undefined;
    notIn?: Array<"Fixed" | "Percent"> | undefined;
    not?: NestedEnumDiscountWithAggregatesFilter | undefined;
    count?: NestedIntFilter | undefined;
    min?: NestedEnumDiscountFilter | undefined;
    max?: NestedEnumDiscountFilter | undefined;
}
