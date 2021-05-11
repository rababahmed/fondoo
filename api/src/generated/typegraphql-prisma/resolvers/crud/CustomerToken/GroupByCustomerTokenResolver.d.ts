import { GraphQLResolveInfo } from "graphql";
import { GroupByCustomerTokenArgs } from "./args/GroupByCustomerTokenArgs";
import { CustomerTokenGroupBy } from "../../outputs/CustomerTokenGroupBy";
export declare class GroupByCustomerTokenResolver {
    groupByCustomerToken(ctx: any, info: GraphQLResolveInfo, args: GroupByCustomerTokenArgs): Promise<CustomerTokenGroupBy[]>;
}
