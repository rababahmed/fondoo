import { CouponOrderByInput } from "../../../inputs/CouponOrderByInput";
import { CouponScalarWhereWithAggregatesInput } from "../../../inputs/CouponScalarWhereWithAggregatesInput";
import { CouponWhereInput } from "../../../inputs/CouponWhereInput";
export declare class GroupByCouponArgs {
    where?: CouponWhereInput | undefined;
    orderBy?: CouponOrderByInput[] | undefined;
    by: Array<"id" | "code" | "discount" | "value" | "description">;
    having?: CouponScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
