import { GraphQLResolveInfo } from "graphql";
import { FindFirstCouponArgs } from "./args/FindFirstCouponArgs";
import { Coupon } from "../../../models/Coupon";
export declare class FindFirstCouponResolver {
    findFirstCoupon(ctx: any, info: GraphQLResolveInfo, args: FindFirstCouponArgs): Promise<Coupon | null>;
}
