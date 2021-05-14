import { NestedFloatFilter } from "../inputs/NestedFloatFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedFloatWithAggregatesFilter {
    equals?: number | undefined;
    in?: number[] | undefined;
    notIn?: number[] | undefined;
    lt?: number | undefined;
    lte?: number | undefined;
    gt?: number | undefined;
    gte?: number | undefined;
    not?: NestedFloatWithAggregatesFilter | undefined;
    count?: NestedIntFilter | undefined;
    avg?: NestedFloatFilter | undefined;
    sum?: NestedFloatFilter | undefined;
    min?: NestedFloatFilter | undefined;
    max?: NestedFloatFilter | undefined;
}
