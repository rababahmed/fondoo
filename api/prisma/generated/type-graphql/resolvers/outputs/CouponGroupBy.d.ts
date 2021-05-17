import { CouponAvgAggregate } from "../outputs/CouponAvgAggregate";
import { CouponCountAggregate } from "../outputs/CouponCountAggregate";
import { CouponMaxAggregate } from "../outputs/CouponMaxAggregate";
import { CouponMinAggregate } from "../outputs/CouponMinAggregate";
import { CouponSumAggregate } from "../outputs/CouponSumAggregate";
export declare class CouponGroupBy {
    id: string;
    code: string;
    discount: "Fixed" | "Percent";
    value: number;
    description: string | null;
    count: CouponCountAggregate | null;
    avg: CouponAvgAggregate | null;
    sum: CouponSumAggregate | null;
    min: CouponMinAggregate | null;
    max: CouponMaxAggregate | null;
}
