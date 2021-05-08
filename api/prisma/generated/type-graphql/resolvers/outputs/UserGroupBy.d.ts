import { UserAvgAggregate } from "../outputs/UserAvgAggregate";
import { UserCountAggregate } from "../outputs/UserCountAggregate";
import { UserMaxAggregate } from "../outputs/UserMaxAggregate";
import { UserMinAggregate } from "../outputs/UserMinAggregate";
import { UserSumAggregate } from "../outputs/UserSumAggregate";
export declare class UserGroupBy {
    id: number;
    createdAt: Date;
    fullName: string;
    email: string;
    password: string;
    phone: string | null;
    role: "Cashier" | "Manager" | "Owner" | "Admin" | "SuperAdmin";
    count: UserCountAggregate | null;
    avg: UserAvgAggregate | null;
    sum: UserSumAggregate | null;
    min: UserMinAggregate | null;
    max: UserMaxAggregate | null;
}
