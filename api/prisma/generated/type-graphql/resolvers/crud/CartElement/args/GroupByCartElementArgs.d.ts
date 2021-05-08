import { CartElementOrderByInput } from "../../../inputs/CartElementOrderByInput";
import { CartElementScalarWhereWithAggregatesInput } from "../../../inputs/CartElementScalarWhereWithAggregatesInput";
import { CartElementWhereInput } from "../../../inputs/CartElementWhereInput";
export declare class GroupByCartElementArgs {
    where?: CartElementWhereInput | undefined;
    orderBy?: CartElementOrderByInput[] | undefined;
    by: Array<"id" | "quantity" | "customerId" | "productId" | "createdAt" | "updatedAt">;
    having?: CartElementScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
