import { CustomerCreateNestedOneWithoutCartInput } from "../inputs/CustomerCreateNestedOneWithoutCartInput";
export declare class CartElementCreateWithoutProductInput {
    id?: string | undefined;
    quantity?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    customer: CustomerCreateNestedOneWithoutCartInput;
}
