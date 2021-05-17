import { GraphQLResolveInfo } from "graphql";
import { UpsertOrderItemArgs } from "./args/UpsertOrderItemArgs";
import { OrderItem } from "../../../models/OrderItem";
export declare class UpsertOrderItemResolver {
    upsertOrderItem(ctx: any, info: GraphQLResolveInfo, args: UpsertOrderItemArgs): Promise<OrderItem>;
}
