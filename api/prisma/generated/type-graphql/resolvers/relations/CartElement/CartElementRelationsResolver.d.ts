import { CartElement } from "../../../models/CartElement";
import { Customer } from "../../../models/Customer";
import { Product } from "../../../models/Product";
export declare class CartElementRelationsResolver {
    product(cartElement: CartElement, ctx: any): Promise<Product>;
    customer(cartElement: CartElement, ctx: any): Promise<Customer>;
}
