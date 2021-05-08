import { GraphQLResolveInfo } from "graphql";
import { UpsertOrderElementArgs } from "./args/UpsertOrderElementArgs";
import { OrderElement } from "../../../models/OrderElement";
export declare class UpsertOrderElementResolver {
    upsertOrderElement(ctx: any, info: GraphQLResolveInfo, args: UpsertOrderElementArgs): Promise<OrderElement>;
}
