import { OrderOrderByInput } from "../../../inputs/OrderOrderByInput";
import { OrderScalarWhereWithAggregatesInput } from "../../../inputs/OrderScalarWhereWithAggregatesInput";
import { OrderWhereInput } from "../../../inputs/OrderWhereInput";
export declare class GroupByOrderArgs {
    where?: OrderWhereInput | undefined;
    orderBy?: OrderOrderByInput[] | undefined;
    by: Array<"id" | "charges" | "total" | "isAccepted" | "restaurantId" | "customerId" | "customerAddressId" | "createdAt" | "updatedAt">;
    having?: OrderScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
