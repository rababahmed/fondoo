import { UserTokenAvgAggregate } from "../outputs/UserTokenAvgAggregate";
import { UserTokenCountAggregate } from "../outputs/UserTokenCountAggregate";
import { UserTokenMaxAggregate } from "../outputs/UserTokenMaxAggregate";
import { UserTokenMinAggregate } from "../outputs/UserTokenMinAggregate";
import { UserTokenSumAggregate } from "../outputs/UserTokenSumAggregate";
export declare class UserTokenGroupBy {
    id: number;
    token: string;
    createdAt: Date;
    updatedAt: Date;
    userId: number | null;
    count: UserTokenCountAggregate | null;
    avg: UserTokenAvgAggregate | null;
    sum: UserTokenSumAggregate | null;
    min: UserTokenMinAggregate | null;
    max: UserTokenMaxAggregate | null;
}
