import { OrderUncheckedCreateNestedManyWithoutCustomerAddressInput } from "../inputs/OrderUncheckedCreateNestedManyWithoutCustomerAddressInput";
export declare class CustomerAddressUncheckedCreateInput {
    id?: number | undefined;
    createdAt?: Date | undefined;
    streetAddress: string;
    city: string;
    postCode: string;
    country: string;
    customerId?: number | undefined;
    Order?: OrderUncheckedCreateNestedManyWithoutCustomerAddressInput | undefined;
}
