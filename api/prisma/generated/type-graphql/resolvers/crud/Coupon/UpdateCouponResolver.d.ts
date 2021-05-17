import { GraphQLResolveInfo } from "graphql";
import { UpdateCouponArgs } from "./args/UpdateCouponArgs";
import { Coupon } from "../../../models/Coupon";
export declare class UpdateCouponResolver {
    updateCoupon(ctx: any, info: GraphQLResolveInfo, args: UpdateCouponArgs): Promise<Coupon | null>;
}
