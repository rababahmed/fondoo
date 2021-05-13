import { GraphQLResolveInfo } from "graphql";
import { DeleteOrderArgs } from "./args/DeleteOrderArgs";
import { Order } from "../../../models/Order";
export declare class DeleteOrderResolver {
    deleteOrder(ctx: any, info: GraphQLResolveInfo, args: DeleteOrderArgs): Promise<Order | null>;
}
