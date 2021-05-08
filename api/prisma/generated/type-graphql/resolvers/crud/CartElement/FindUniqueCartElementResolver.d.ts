import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCartElementArgs } from "./args/FindUniqueCartElementArgs";
import { CartElement } from "../../../models/CartElement";
export declare class FindUniqueCartElementResolver {
    cartElement(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCartElementArgs): Promise<CartElement | null>;
}
