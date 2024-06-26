import { CustomerOrderByInput } from "../../../inputs/CustomerOrderByInput";
import { CustomerWhereInput } from "../../../inputs/CustomerWhereInput";
import { CustomerWhereUniqueInput } from "../../../inputs/CustomerWhereUniqueInput";
export declare class FindManyCustomerArgs {
    where?: CustomerWhereInput | undefined;
    orderBy?: CustomerOrderByInput[] | undefined;
    cursor?: CustomerWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "createdAt" | "firstName" | "lastName" | "email" | "password" | "phone" | "updatedAt"> | undefined;
}
