import { GraphQLResolveInfo } from "graphql";
import { FindManyCartElementArgs } from "./args/FindManyCartElementArgs";
import { CartElement } from "../../../models/CartElement";
export declare class FindManyCartElementResolver {
    cartElements(ctx: any, info: GraphQLResolveInfo, args: FindManyCartElementArgs): Promise<CartElement[]>;
}
