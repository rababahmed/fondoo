import { GraphQLResolveInfo } from "graphql";
import { UpsertOrderArgs } from "./args/UpsertOrderArgs";
import { Order } from "../../../models/Order";
export declare class UpsertOrderResolver {
    upsertOrder(ctx: any, info: GraphQLResolveInfo, args: UpsertOrderArgs): Promise<Order>;
}
