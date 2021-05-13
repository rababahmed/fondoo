import { NestedEnumDeliveryFeeFilter } from "../inputs/NestedEnumDeliveryFeeFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumDeliveryFeeWithAggregatesFilter {
    equals?: "Fixed" | "Percent" | undefined;
    in?: Array<"Fixed" | "Percent"> | undefined;
    notIn?: Array<"Fixed" | "Percent"> | undefined;
    not?: NestedEnumDeliveryFeeWithAggregatesFilter | undefined;
    count?: NestedIntFilter | undefined;
    min?: NestedEnumDeliveryFeeFilter | undefined;
    max?: NestedEnumDeliveryFeeFilter | undefined;
}
