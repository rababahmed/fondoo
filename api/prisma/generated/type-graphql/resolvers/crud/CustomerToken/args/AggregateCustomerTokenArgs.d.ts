import { CustomerTokenOrderByInput } from "../../../inputs/CustomerTokenOrderByInput";
import { CustomerTokenWhereInput } from "../../../inputs/CustomerTokenWhereInput";
import { CustomerTokenWhereUniqueInput } from "../../../inputs/CustomerTokenWhereUniqueInput";
export declare class AggregateCustomerTokenArgs {
    where?: CustomerTokenWhereInput | undefined;
    orderBy?: CustomerTokenOrderByInput[] | undefined;
    cursor?: CustomerTokenWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
