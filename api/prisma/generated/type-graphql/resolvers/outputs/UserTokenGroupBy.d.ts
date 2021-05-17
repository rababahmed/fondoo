import { UserTokenCountAggregate } from "../outputs/UserTokenCountAggregate";
import { UserTokenMaxAggregate } from "../outputs/UserTokenMaxAggregate";
import { UserTokenMinAggregate } from "../outputs/UserTokenMinAggregate";
export declare class UserTokenGroupBy {
    id: string;
    token: string;
    provider: string | null;
    createdAt: Date;
    updatedAt: Date;
    userId: string | null;
    count: UserTokenCountAggregate | null;
    min: UserTokenMinAggregate | null;
    max: UserTokenMaxAggregate | null;
}
