import { OrderOrderByInput } from "../../../inputs/OrderOrderByInput";
import { OrderWhereInput } from "../../../inputs/OrderWhereInput";
import { OrderWhereUniqueInput } from "../../../inputs/OrderWhereUniqueInput";
export declare class UserOrdersArgs {
    where?: OrderWhereInput | undefined;
    orderBy?: OrderOrderByInput[] | undefined;
    cursor?: OrderWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "items" | "coupon" | "deliveryCharges" | "vat" | "serviceCharge" | "total" | "isAccepted" | "createdAt" | "updatedAt" | "userId" | "restaurantId" | "customerId" | "customerAddressId"> | undefined;
}
