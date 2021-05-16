import { GraphQLResolveInfo } from "graphql";
import { FindUniqueOrderArgs } from "./args/FindUniqueOrderArgs";
import { Order } from "../../../models/Order";
export declare class FindUniqueOrderResolver {
    findUniqueOrder(ctx: any, info: GraphQLResolveInfo, args: FindUniqueOrderArgs): Promise<Order | null>;
}
