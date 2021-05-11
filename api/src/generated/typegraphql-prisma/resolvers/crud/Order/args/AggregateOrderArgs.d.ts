import { OrderOrderByInput } from "../../../inputs/OrderOrderByInput";
import { OrderWhereInput } from "../../../inputs/OrderWhereInput";
import { OrderWhereUniqueInput } from "../../../inputs/OrderWhereUniqueInput";
export declare class AggregateOrderArgs {
    where?: OrderWhereInput | undefined;
    orderBy?: OrderOrderByInput[] | undefined;
    cursor?: OrderWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
