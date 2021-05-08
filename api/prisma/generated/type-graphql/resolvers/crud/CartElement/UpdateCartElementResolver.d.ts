import { GraphQLResolveInfo } from "graphql";
import { UpdateCartElementArgs } from "./args/UpdateCartElementArgs";
import { CartElement } from "../../../models/CartElement";
export declare class UpdateCartElementResolver {
    updateCartElement(ctx: any, info: GraphQLResolveInfo, args: UpdateCartElementArgs): Promise<CartElement | null>;
}
