import { CustomerCreateNestedOneWithoutAddressInput } from "../inputs/CustomerCreateNestedOneWithoutAddressInput";
import { OrderCreateNestedManyWithoutCustomerAddressInput } from "../inputs/OrderCreateNestedManyWithoutCustomerAddressInput";
export declare class CustomerAddressCreateInput {
    createdAt?: Date | undefined;
    streetAddress: string;
    city: string;
    postCode: string;
    country: string;
    Customer?: CustomerCreateNestedOneWithoutAddressInput | undefined;
    Order?: OrderCreateNestedManyWithoutCustomerAddressInput | undefined;
}
