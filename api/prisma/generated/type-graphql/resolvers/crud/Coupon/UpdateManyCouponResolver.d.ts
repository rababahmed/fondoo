import { GraphQLResolveInfo } from "graphql";
import { UpdateManyCouponArgs } from "./args/UpdateManyCouponArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCouponResolver {
    updateManyCoupon(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCouponArgs): Promise<AffectedRowsOutput>;
}
