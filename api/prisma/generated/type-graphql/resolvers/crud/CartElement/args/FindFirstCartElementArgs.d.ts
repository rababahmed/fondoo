import { CartElementOrderByInput } from "../../../inputs/CartElementOrderByInput";
import { CartElementWhereInput } from "../../../inputs/CartElementWhereInput";
import { CartElementWhereUniqueInput } from "../../../inputs/CartElementWhereUniqueInput";
export declare class FindFirstCartElementArgs {
    where?: CartElementWhereInput | undefined;
    orderBy?: CartElementOrderByInput[] | undefined;
    cursor?: CartElementWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "quantity" | "customerId" | "productId" | "createdAt" | "updatedAt"> | undefined;
}
