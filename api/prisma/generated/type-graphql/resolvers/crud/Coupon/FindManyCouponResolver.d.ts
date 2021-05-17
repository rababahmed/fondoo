import { GraphQLResolveInfo } from "graphql";
import { FindManyCouponArgs } from "./args/FindManyCouponArgs";
import { Coupon } from "../../../models/Coupon";
export declare class FindManyCouponResolver {
    coupons(ctx: any, info: GraphQLResolveInfo, args: FindManyCouponArgs): Promise<Coupon[]>;
}
