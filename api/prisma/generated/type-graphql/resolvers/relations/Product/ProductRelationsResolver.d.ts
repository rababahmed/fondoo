import { CartElement } from "../../../models/CartElement";
import { Order } from "../../../models/Order";
import { Product } from "../../../models/Product";
import { ProductCategory } from "../../../models/ProductCategory";
import { Restaurant } from "../../../models/Restaurant";
import { ProductCartElementArgs } from "./args/ProductCartElementArgs";
export declare class ProductRelationsResolver {
    category(product: Product, ctx: any): Promise<ProductCategory>;
    Restaurant(product: Product, ctx: any): Promise<Restaurant | null>;
    Order(product: Product, ctx: any): Promise<Order | null>;
    CartElement(product: Product, ctx: any, args: ProductCartElementArgs): Promise<CartElement[]>;
}
