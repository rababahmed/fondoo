import { NestedEnumDeliveryFeeFilter } from "../inputs/NestedEnumDeliveryFeeFilter";
export declare class EnumDeliveryFeeFilter {
    equals?: "Fixed" | "Percent" | undefined;
    in?: Array<"Fixed" | "Percent"> | undefined;
    notIn?: Array<"Fixed" | "Percent"> | undefined;
    not?: NestedEnumDeliveryFeeFilter | undefined;
}
