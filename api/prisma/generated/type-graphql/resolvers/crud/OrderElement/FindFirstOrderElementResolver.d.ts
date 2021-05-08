import { GraphQLResolveInfo } from "graphql";
import { FindFirstOrderElementArgs } from "./args/FindFirstOrderElementArgs";
import { OrderElement } from "../../../models/OrderElement";
export declare class FindFirstOrderElementResolver {
    findFirstOrderElement(ctx: any, info: GraphQLResolveInfo, args: FindFirstOrderElementArgs): Promise<OrderElement | null>;
}
