import { GraphQLResolveInfo } from "graphql";
import { FindManyProductArgs } from "./args/FindManyProductArgs";
import { Product } from "../../../models/Product";
export declare class FindManyProductResolver {
    findManyProduct(ctx: any, info: GraphQLResolveInfo, args: FindManyProductArgs): Promise<Product[]>;
}
