import { GraphQLResolveInfo } from "graphql";
import { CreateProductArgs } from "./args/CreateProductArgs";
import { Product } from "../../../models/Product";
export declare class CreateProductResolver {
    createProduct(ctx: any, info: GraphQLResolveInfo, args: CreateProductArgs): Promise<Product>;
}
