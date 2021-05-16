import { GraphQLResolveInfo } from "graphql";
import { FindManyProductCategoryArgs } from "./args/FindManyProductCategoryArgs";
import { ProductCategory } from "../../../models/ProductCategory";
export declare class FindManyProductCategoryResolver {
    findManyProductCategory(ctx: any, info: GraphQLResolveInfo, args: FindManyProductCategoryArgs): Promise<ProductCategory[]>;
}
