import { OrderCreateNestedManyWithoutCustomerAddressInput } from "../inputs/OrderCreateNestedManyWithoutCustomerAddressInput";
export declare class CustomerAddressCreateWithoutCustomerInput {
    createdAt?: Date | undefined;
    streetAddress: string;
    city: string;
    postCode: string;
    country: string;
    Order?: OrderCreateNestedManyWithoutCustomerAddressInput | undefined;
}
