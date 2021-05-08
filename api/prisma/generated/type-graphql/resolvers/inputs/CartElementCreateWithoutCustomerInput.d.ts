import { ProductCreateNestedOneWithoutCartElementInput } from "../inputs/ProductCreateNestedOneWithoutCartElementInput";
export declare class CartElementCreateWithoutCustomerInput {
    id?: string | undefined;
    quantity?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    product: ProductCreateNestedOneWithoutCartElementInput;
}
