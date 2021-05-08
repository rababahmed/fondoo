import { GraphQLResolveInfo } from "graphql";
import { FindManyOrderElementArgs } from "./args/FindManyOrderElementArgs";
import { OrderElement } from "../../../models/OrderElement";
export declare class FindManyOrderElementResolver {
    orderElements(ctx: any, info: GraphQLResolveInfo, args: FindManyOrderElementArgs): Promise<OrderElement[]>;
}
