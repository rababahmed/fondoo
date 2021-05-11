import { NestedEnumSpiceLevelFilter } from "../inputs/NestedEnumSpiceLevelFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumSpiceLevelWithAggregatesFilter {
    equals?: "None" | "Mild" | "Medium" | "Hot" | "ExtraHot" | undefined;
    in?: Array<"None" | "Mild" | "Medium" | "Hot" | "ExtraHot"> | undefined;
    notIn?: Array<"None" | "Mild" | "Medium" | "Hot" | "ExtraHot"> | undefined;
    not?: NestedEnumSpiceLevelWithAggregatesFilter | undefined;
    count?: NestedIntFilter | undefined;
    min?: NestedEnumSpiceLevelFilter | undefined;
    max?: NestedEnumSpiceLevelFilter | undefined;
}
