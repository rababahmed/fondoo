import { OrderUncheckedCreateNestedManyWithoutCustomerAddressInput } from "../inputs/OrderUncheckedCreateNestedManyWithoutCustomerAddressInput";
export declare class CustomerAddressUncheckedCreateWithoutCustomerInput {
    id?: number | undefined;
    createdAt?: Date | undefined;
    streetAddress: string;
    city: string;
    postCode: string;
    country: string;
    Order?: OrderUncheckedCreateNestedManyWithoutCustomerAddressInput | undefined;
}
