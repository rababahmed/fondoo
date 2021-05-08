import { CustomerCreateNestedOneWithoutCartInput } from "../inputs/CustomerCreateNestedOneWithoutCartInput";
import { ProductCreateNestedOneWithoutCartElementInput } from "../inputs/ProductCreateNestedOneWithoutCartElementInput";
export declare class CartElementCreateInput {
    id?: string | undefined;
    quantity?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    product: ProductCreateNestedOneWithoutCartElementInput;
    customer: CustomerCreateNestedOneWithoutCartInput;
}
