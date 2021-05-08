import { GraphQLResolveInfo } from "graphql";
import { FindUniqueOrderElementArgs } from "./args/FindUniqueOrderElementArgs";
import { OrderElement } from "../../../models/OrderElement";
export declare class FindUniqueOrderElementResolver {
    orderElement(ctx: any, info: GraphQLResolveInfo, args: FindUniqueOrderElementArgs): Promise<OrderElement | null>;
}
