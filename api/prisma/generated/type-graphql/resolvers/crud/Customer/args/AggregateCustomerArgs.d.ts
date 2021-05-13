import { CustomerOrderByInput } from "../../../inputs/CustomerOrderByInput";
import { CustomerWhereInput } from "../../../inputs/CustomerWhereInput";
import { CustomerWhereUniqueInput } from "../../../inputs/CustomerWhereUniqueInput";
export declare class AggregateCustomerArgs {
    where?: CustomerWhereInput | undefined;
    orderBy?: CustomerOrderByInput[] | undefined;
    cursor?: CustomerWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
