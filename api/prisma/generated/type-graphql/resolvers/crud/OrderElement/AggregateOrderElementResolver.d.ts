import { GraphQLResolveInfo } from "graphql";
import { AggregateOrderElementArgs } from "./args/AggregateOrderElementArgs";
import { AggregateOrderElement } from "../../outputs/AggregateOrderElement";
export declare class AggregateOrderElementResolver {
    aggregateOrderElement(ctx: any, info: GraphQLResolveInfo, args: AggregateOrderElementArgs): Promise<AggregateOrderElement>;
}
