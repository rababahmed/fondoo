import { OrderOrderByInput } from "../../../inputs/OrderOrderByInput";
import { OrderWhereInput } from "../../../inputs/OrderWhereInput";
import { OrderWhereUniqueInput } from "../../../inputs/OrderWhereUniqueInput";
export declare class CustomerOrdersArgs {
    where?: OrderWhereInput | undefined;
    orderBy?: OrderOrderByInput[] | undefined;
    cursor?: OrderWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "address" | "discount" | "deliveryCharges" | "vat" | "serviceCharge" | "total" | "isAccepted" | "couponId" | "restaurantId" | "customerId" | "createdAt" | "updatedAt"> | undefined;
}
