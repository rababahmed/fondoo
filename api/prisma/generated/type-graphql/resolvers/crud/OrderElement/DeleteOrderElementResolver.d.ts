import { GraphQLResolveInfo } from "graphql";
import { DeleteOrderElementArgs } from "./args/DeleteOrderElementArgs";
import { OrderElement } from "../../../models/OrderElement";
export declare class DeleteOrderElementResolver {
    deleteOrderElement(ctx: any, info: GraphQLResolveInfo, args: DeleteOrderElementArgs): Promise<OrderElement | null>;
}
