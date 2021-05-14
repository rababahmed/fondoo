import { OrderOrderByInput } from "../../../inputs/OrderOrderByInput";
import { OrderScalarWhereWithAggregatesInput } from "../../../inputs/OrderScalarWhereWithAggregatesInput";
import { OrderWhereInput } from "../../../inputs/OrderWhereInput";
export declare class GroupByOrderArgs {
    where?: OrderWhereInput | undefined;
    orderBy?: OrderOrderByInput[] | undefined;
    by: Array<"id" | "items" | "coupon" | "deliveryCharges" | "vat" | "serviceCharge" | "total" | "isAccepted" | "createdAt" | "updatedAt" | "userId" | "restaurantId" | "customerId" | "customerAddressId">;
    having?: OrderScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
