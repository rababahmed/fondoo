import { GraphQLResolveInfo } from "graphql";
import { AggregateCustomerTokenArgs } from "./args/AggregateCustomerTokenArgs";
import { AggregateCustomerToken } from "../../outputs/AggregateCustomerToken";
export declare class AggregateCustomerTokenResolver {
    aggregateCustomerToken(ctx: any, info: GraphQLResolveInfo, args: AggregateCustomerTokenArgs): Promise<AggregateCustomerToken>;
}
