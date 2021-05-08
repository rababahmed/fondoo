import { GraphQLResolveInfo } from "graphql";
import { GroupByCartElementArgs } from "./args/GroupByCartElementArgs";
import { CartElementGroupBy } from "../../outputs/CartElementGroupBy";
export declare class GroupByCartElementResolver {
    groupByCartElement(ctx: any, info: GraphQLResolveInfo, args: GroupByCartElementArgs): Promise<CartElementGroupBy[]>;
}
