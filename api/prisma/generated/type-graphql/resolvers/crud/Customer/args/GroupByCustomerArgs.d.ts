import { CustomerOrderByInput } from "../../../inputs/CustomerOrderByInput";
import { CustomerScalarWhereWithAggregatesInput } from "../../../inputs/CustomerScalarWhereWithAggregatesInput";
import { CustomerWhereInput } from "../../../inputs/CustomerWhereInput";
export declare class GroupByCustomerArgs {
    where?: CustomerWhereInput | undefined;
    orderBy?: CustomerOrderByInput[] | undefined;
    by: Array<"id" | "createdAt" | "firstName" | "lastName" | "email" | "password" | "phone" | "updatedAt">;
    having?: CustomerScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
