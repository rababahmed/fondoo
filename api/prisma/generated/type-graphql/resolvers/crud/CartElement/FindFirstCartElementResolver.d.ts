import { GraphQLResolveInfo } from "graphql";
import { FindFirstCartElementArgs } from "./args/FindFirstCartElementArgs";
import { CartElement } from "../../../models/CartElement";
export declare class FindFirstCartElementResolver {
    findFirstCartElement(ctx: any, info: GraphQLResolveInfo, args: FindFirstCartElementArgs): Promise<CartElement | null>;
}
