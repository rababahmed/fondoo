import { GraphQLResolveInfo } from "graphql";
import { AggregateCouponArgs } from "./args/AggregateCouponArgs";
import { AggregateCoupon } from "../../outputs/AggregateCoupon";
export declare class AggregateCouponResolver {
    aggregateCoupon(ctx: any, info: GraphQLResolveInfo, args: AggregateCouponArgs): Promise<AggregateCoupon>;
}
