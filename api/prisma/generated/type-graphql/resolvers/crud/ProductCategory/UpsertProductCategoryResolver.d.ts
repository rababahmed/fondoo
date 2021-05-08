import { GraphQLResolveInfo } from "graphql";
import { UpsertProductCategoryArgs } from "./args/UpsertProductCategoryArgs";
import { ProductCategory } from "../../../models/ProductCategory";
export declare class UpsertProductCategoryResolver {
    upsertProductCategory(ctx: any, info: GraphQLResolveInfo, args: UpsertProductCategoryArgs): Promise<ProductCategory>;
}
