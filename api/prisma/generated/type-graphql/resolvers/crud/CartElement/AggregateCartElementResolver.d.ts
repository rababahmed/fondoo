import { GraphQLResolveInfo } from "graphql";
import { AggregateCartElementArgs } from "./args/AggregateCartElementArgs";
import { AggregateCartElement } from "../../outputs/AggregateCartElement";
export declare class AggregateCartElementResolver {
    aggregateCartElement(ctx: any, info: GraphQLResolveInfo, args: AggregateCartElementArgs): Promise<AggregateCartElement>;
}
