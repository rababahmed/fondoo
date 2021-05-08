import { GraphQLResolveInfo } from "graphql";
import { UpdateOrderElementArgs } from "./args/UpdateOrderElementArgs";
import { OrderElement } from "../../../models/OrderElement";
export declare class UpdateOrderElementResolver {
    updateOrderElement(ctx: any, info: GraphQLResolveInfo, args: UpdateOrderElementArgs): Promise<OrderElement | null>;
}
