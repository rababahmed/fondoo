import { GraphQLResolveInfo } from "graphql";
import { AggregateUserTokenArgs } from "./args/AggregateUserTokenArgs";
import { AggregateUserToken } from "../../outputs/AggregateUserToken";
export declare class AggregateUserTokenResolver {
    aggregateUserToken(ctx: any, info: GraphQLResolveInfo, args: AggregateUserTokenArgs): Promise<AggregateUserToken>;
}
