import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCouponArgs } from "./args/FindUniqueCouponArgs";
import { Coupon } from "../../../models/Coupon";
export declare class FindUniqueCouponResolver {
    coupon(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCouponArgs): Promise<Coupon | null>;
}
