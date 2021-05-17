import { Coupon } from "../../../models/Coupon";
import { Order } from "../../../models/Order";
import { CouponOrdersArgs } from "./args/CouponOrdersArgs";
export declare class CouponRelationsResolver {
    orders(coupon: Coupon, ctx: any, args: CouponOrdersArgs): Promise<Order[]>;
}
