import { GraphQLResolveInfo } from "graphql";
import { UpsertProductArgs } from "./args/UpsertProductArgs";
import { Product } from "../../../models/Product";
export declare class UpsertProductResolver {
    upsertProduct(ctx: any, info: GraphQLResolveInfo, args: UpsertProductArgs): Promise<Product>;
}
