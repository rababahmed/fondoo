import { GraphQLResolveInfo } from "graphql";
import { DeleteManyCouponArgs } from "./args/DeleteManyCouponArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCouponResolver {
    deleteManyCoupon(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCouponArgs): Promise<AffectedRowsOutput>;
}
