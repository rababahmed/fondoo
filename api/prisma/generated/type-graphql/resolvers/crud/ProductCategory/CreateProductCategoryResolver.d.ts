import { GraphQLResolveInfo } from "graphql";
import { CreateProductCategoryArgs } from "./args/CreateProductCategoryArgs";
import { ProductCategory } from "../../../models/ProductCategory";
export declare class CreateProductCategoryResolver {
    createProductCategory(ctx: any, info: GraphQLResolveInfo, args: CreateProductCategoryArgs): Promise<ProductCategory>;
}
