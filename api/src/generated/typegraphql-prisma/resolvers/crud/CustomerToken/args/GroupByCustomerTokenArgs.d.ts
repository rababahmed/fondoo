import { CustomerTokenOrderByInput } from "../../../inputs/CustomerTokenOrderByInput";
import { CustomerTokenScalarWhereWithAggregatesInput } from "../../../inputs/CustomerTokenScalarWhereWithAggregatesInput";
import { CustomerTokenWhereInput } from "../../../inputs/CustomerTokenWhereInput";
export declare class GroupByCustomerTokenArgs {
    where?: CustomerTokenWhereInput | undefined;
    orderBy?: CustomerTokenOrderByInput[] | undefined;
    by: Array<"id" | "token" | "createdAt" | "updatedAt" | "customerId">;
    having?: CustomerTokenScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
