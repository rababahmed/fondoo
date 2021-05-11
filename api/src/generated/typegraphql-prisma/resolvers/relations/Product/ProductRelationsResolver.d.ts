import { Product } from "../../../models/Product";
import { ProductCategory } from "../../../models/ProductCategory";
import { Restaurant } from "../../../models/Restaurant";
export declare class ProductRelationsResolver {
    ProductCategory(product: Product, ctx: any): Promise<ProductCategory | null>;
    Restaurant(product: Product, ctx: any): Promise<Restaurant | null>;
}
