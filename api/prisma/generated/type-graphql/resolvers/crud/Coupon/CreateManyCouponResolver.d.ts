import { GraphQLResolveInfo } from "graphql";
import { CreateManyCouponArgs } from "./args/CreateManyCouponArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyCouponResolver {
    createManyCoupon(ctx: any, info: GraphQLResolveInfo, args: CreateManyCouponArgs): Promise<AffectedRowsOutput>;
}
