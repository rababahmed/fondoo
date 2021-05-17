import { UserCountAggregate } from "../outputs/UserCountAggregate";
import { UserMaxAggregate } from "../outputs/UserMaxAggregate";
import { UserMinAggregate } from "../outputs/UserMinAggregate";
export declare class UserGroupBy {
    id: string;
    createdAt: Date;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string | null;
    role: "Manager" | "Owner" | "Admin" | "SuperAdmin";
    count: UserCountAggregate | null;
    min: UserMinAggregate | null;
    max: UserMaxAggregate | null;
}
