import { Prisma } from "@prisma/client";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { NestedJsonFilter } from "../inputs/NestedJsonFilter";
export declare class JsonWithAggregatesFilter {
    equals?: Prisma.InputJsonValue | undefined;
    not?: Prisma.InputJsonValue | undefined;
    count?: NestedIntFilter | undefined;
    min?: NestedJsonFilter | undefined;
    max?: NestedJsonFilter | undefined;
}
