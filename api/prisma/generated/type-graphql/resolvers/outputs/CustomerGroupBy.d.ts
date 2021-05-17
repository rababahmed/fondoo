import { CustomerCountAggregate } from "../outputs/CustomerCountAggregate";
import { CustomerMaxAggregate } from "../outputs/CustomerMaxAggregate";
import { CustomerMinAggregate } from "../outputs/CustomerMinAggregate";
export declare class CustomerGroupBy {
    id: string;
    createdAt: Date;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    updatedAt: Date;
    count: CustomerCountAggregate | null;
    min: CustomerMinAggregate | null;
    max: CustomerMaxAggregate | null;
}
