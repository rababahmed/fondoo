import { UserTokenCountAggregate } from "../outputs/UserTokenCountAggregate";
import { UserTokenMaxAggregate } from "../outputs/UserTokenMaxAggregate";
import { UserTokenMinAggregate } from "../outputs/UserTokenMinAggregate";
export declare class AggregateUserToken {
    count: UserTokenCountAggregate | null;
    min: UserTokenMinAggregate | null;
    max: UserTokenMaxAggregate | null;
}
