import { CustomerCreateNestedOneWithoutAddressInput } from "../inputs/CustomerCreateNestedOneWithoutAddressInput";
export declare class CustomerAddressCreateWithoutOrderInput {
    createdAt?: Date | undefined;
    streetAddress: string;
    city: string;
    postCode: string;
    country: string;
    Customer?: CustomerCreateNestedOneWithoutAddressInput | undefined;
}
