import { GraphQLResolveInfo } from "graphql";
import { UpdateOrderArgs } from "./args/UpdateOrderArgs";
import { Order } from "../../../models/Order";
export declare class UpdateOrderResolver {
    updateOrder(ctx: any, info: GraphQLResolveInfo, args: UpdateOrderArgs): Promise<Order | null>;
}
