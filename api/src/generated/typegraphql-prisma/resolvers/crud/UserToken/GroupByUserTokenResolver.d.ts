import { GraphQLResolveInfo } from "graphql";
import { GroupByUserTokenArgs } from "./args/GroupByUserTokenArgs";
import { UserTokenGroupBy } from "../../outputs/UserTokenGroupBy";
export declare class GroupByUserTokenResolver {
    groupByUserToken(ctx: any, info: GraphQLResolveInfo, args: GroupByUserTokenArgs): Promise<UserTokenGroupBy[]>;
}
