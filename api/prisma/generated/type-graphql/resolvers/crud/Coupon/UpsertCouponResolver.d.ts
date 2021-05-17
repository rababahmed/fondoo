import { GraphQLResolveInfo } from "graphql";
import { UpsertCouponArgs } from "./args/UpsertCouponArgs";
import { Coupon } from "../../../models/Coupon";
export declare class UpsertCouponResolver {
    upsertCoupon(ctx: any, info: GraphQLResolveInfo, args: UpsertCouponArgs): Promise<Coupon>;
}
