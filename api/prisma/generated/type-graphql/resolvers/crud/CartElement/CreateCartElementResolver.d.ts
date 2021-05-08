import { GraphQLResolveInfo } from "graphql";
import { CreateCartElementArgs } from "./args/CreateCartElementArgs";
import { CartElement } from "../../../models/CartElement";
export declare class CreateCartElementResolver {
    createCartElement(ctx: any, info: GraphQLResolveInfo, args: CreateCartElementArgs): Promise<CartElement>;
}
