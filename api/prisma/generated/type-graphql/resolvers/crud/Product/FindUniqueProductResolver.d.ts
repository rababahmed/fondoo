import { GraphQLResolveInfo } from "graphql";
import { FindUniqueProductArgs } from "./args/FindUniqueProductArgs";
import { Product } from "../../../models/Product";
export declare class FindUniqueProductResolver {
    product(ctx: any, info: GraphQLResolveInfo, args: FindUniqueProductArgs): Promise<Product | null>;
}
