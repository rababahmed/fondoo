import { CouponOrderByInput } from "../../../inputs/CouponOrderByInput";
import { CouponWhereInput } from "../../../inputs/CouponWhereInput";
import { CouponWhereUniqueInput } from "../../../inputs/CouponWhereUniqueInput";
export declare class FindFirstCouponArgs {
    where?: CouponWhereInput | undefined;
    orderBy?: CouponOrderByInput[] | undefined;
    cursor?: CouponWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "code" | "discount" | "value" | "description"> | undefined;
}
