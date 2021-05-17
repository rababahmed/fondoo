import { NestedEnumDiscountFilter } from "../inputs/NestedEnumDiscountFilter";
export declare class EnumDiscountFilter {
    equals?: "Fixed" | "Percent" | undefined;
    in?: Array<"Fixed" | "Percent"> | undefined;
    notIn?: Array<"Fixed" | "Percent"> | undefined;
    not?: NestedEnumDiscountFilter | undefined;
}
