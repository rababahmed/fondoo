import { GraphQLResolveInfo } from "graphql";
import { UpsertCartElementArgs } from "./args/UpsertCartElementArgs";
import { CartElement } from "../../../models/CartElement";
export declare class UpsertCartElementResolver {
    upsertCartElement(ctx: any, info: GraphQLResolveInfo, args: UpsertCartElementArgs): Promise<CartElement>;
}
