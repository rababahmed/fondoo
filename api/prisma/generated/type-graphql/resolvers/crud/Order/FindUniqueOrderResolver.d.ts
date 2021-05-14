import { GraphQLResolveInfo } from "graphql";
import { FindUniqueOrderArgs } from "./args/FindUniqueOrderArgs";
import { Order } from "../../../models/Order";
export declare class FindUniqueOrderResolver {
    order(ctx: any, info: GraphQLResolveInfo, args: FindUniqueOrderArgs): Promise<Order | null>;
}
