import { GraphQLResolveInfo } from "graphql";
import { DeleteCartElementArgs } from "./args/DeleteCartElementArgs";
import { CartElement } from "../../../models/CartElement";
export declare class DeleteCartElementResolver {
    deleteCartElement(ctx: any, info: GraphQLResolveInfo, args: DeleteCartElementArgs): Promise<CartElement | null>;
}
