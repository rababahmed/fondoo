import { GraphQLResolveInfo } from "graphql";
import { DeleteCouponArgs } from "./args/DeleteCouponArgs";
import { Coupon } from "../../../models/Coupon";
export declare class DeleteCouponResolver {
    deleteCoupon(ctx: any, info: GraphQLResolveInfo, args: DeleteCouponArgs): Promise<Coupon | null>;
}
