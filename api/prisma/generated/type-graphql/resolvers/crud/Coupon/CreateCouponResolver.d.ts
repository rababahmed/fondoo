import { GraphQLResolveInfo } from "graphql";
import { CreateCouponArgs } from "./args/CreateCouponArgs";
import { Coupon } from "../../../models/Coupon";
export declare class CreateCouponResolver {
    createCoupon(ctx: any, info: GraphQLResolveInfo, args: CreateCouponArgs): Promise<Coupon>;
}
