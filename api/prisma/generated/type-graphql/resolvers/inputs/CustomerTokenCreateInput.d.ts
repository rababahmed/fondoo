import { CustomerCreateNestedOneWithoutTokenInput } from "../inputs/CustomerCreateNestedOneWithoutTokenInput";
export declare class CustomerTokenCreateInput {
    token: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    Customer?: CustomerCreateNestedOneWithoutTokenInput | undefined;
}
