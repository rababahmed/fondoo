import { CustomerTokenCountAggregate } from "../outputs/CustomerTokenCountAggregate";
import { CustomerTokenMaxAggregate } from "../outputs/CustomerTokenMaxAggregate";
import { CustomerTokenMinAggregate } from "../outputs/CustomerTokenMinAggregate";
export declare class CustomerTokenGroupBy {
    id: string;
    token: string;
    createdAt: Date;
    updatedAt: Date;
    customerId: string | null;
    count: CustomerTokenCountAggregate | null;
    min: CustomerTokenMinAggregate | null;
    max: CustomerTokenMaxAggregate | null;
}
