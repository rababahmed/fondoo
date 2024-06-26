import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { NestedStringNullableFilter } from "../inputs/NestedStringNullableFilter";
import { NestedStringNullableWithAggregatesFilter } from "../inputs/NestedStringNullableWithAggregatesFilter";
export declare class StringNullableWithAggregatesFilter {
    equals?: string | undefined;
    in?: string[] | undefined;
    notIn?: string[] | undefined;
    lt?: string | undefined;
    lte?: string | undefined;
    gt?: string | undefined;
    gte?: string | undefined;
    contains?: string | undefined;
    startsWith?: string | undefined;
    endsWith?: string | undefined;
    mode?: "default" | "insensitive" | undefined;
    not?: NestedStringNullableWithAggregatesFilter | undefined;
    count?: NestedIntNullableFilter | undefined;
    min?: NestedStringNullableFilter | undefined;
    max?: NestedStringNullableFilter | undefined;
}
