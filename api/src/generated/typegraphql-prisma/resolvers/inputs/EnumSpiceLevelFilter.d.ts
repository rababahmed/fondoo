import { NestedEnumSpiceLevelFilter } from "../inputs/NestedEnumSpiceLevelFilter";
export declare class EnumSpiceLevelFilter {
    equals?: "None" | "Mild" | "Medium" | "Hot" | "ExtraHot" | undefined;
    in?: Array<"None" | "Mild" | "Medium" | "Hot" | "ExtraHot"> | undefined;
    notIn?: Array<"None" | "Mild" | "Medium" | "Hot" | "ExtraHot"> | undefined;
    not?: NestedEnumSpiceLevelFilter | undefined;
}
