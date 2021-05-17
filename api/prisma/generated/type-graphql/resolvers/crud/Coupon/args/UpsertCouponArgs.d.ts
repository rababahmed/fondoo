import { CouponCreateInput } from "../../../inputs/CouponCreateInput";
import { CouponUpdateInput } from "../../../inputs/CouponUpdateInput";
import { CouponWhereUniqueInput } from "../../../inputs/CouponWhereUniqueInput";
export declare class UpsertCouponArgs {
    where: CouponWhereUniqueInput;
    create: CouponCreateInput;
    update: CouponUpdateInput;
}
