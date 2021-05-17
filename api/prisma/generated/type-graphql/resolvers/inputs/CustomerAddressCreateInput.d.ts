import { CustomerCreateNestedOneWithoutAddressesInput } from "../inputs/CustomerCreateNestedOneWithoutAddressesInput";
export declare class CustomerAddressCreateInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    streetAddress: string;
    city: string;
    postCode: string;
    country: string;
    Customer?: CustomerCreateNestedOneWithoutAddressesInput | undefined;
}
