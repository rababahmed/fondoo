import { GraphQLResolveInfo } from "graphql";
import { FindManyProductCategoryArgs } from "./args/FindManyProductCategoryArgs";
import { ProductCategory } from "../../../models/ProductCategory";
export declare class FindManyProductCategoryResolver {
    productCategories(ctx: any, info: GraphQLResolveInfo, args: FindManyProductCategoryArgs): Promise<ProductCategory[]>;
}
