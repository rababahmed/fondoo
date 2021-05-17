import { GraphQLResolveInfo } from "graphql";
import { GroupByCouponArgs } from "./args/GroupByCouponArgs";
import { CouponGroupBy } from "../../outputs/CouponGroupBy";
export declare class GroupByCouponResolver {
    groupByCoupon(ctx: any, info: GraphQLResolveInfo, args: GroupByCouponArgs): Promise<CouponGroupBy[]>;
}
