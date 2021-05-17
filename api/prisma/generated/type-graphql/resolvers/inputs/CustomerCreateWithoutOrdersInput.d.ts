import { CustomerAddressCreateNestedManyWithoutCustomerInput } from "../inputs/CustomerAddressCreateNestedManyWithoutCustomerInput";
import { CustomerTokenCreateNestedManyWithoutCustomerInput } from "../inputs/CustomerTokenCreateNestedManyWithoutCustomerInput";
import { RestaurantCreateNestedManyWithoutCustomersInput } from "../inputs/RestaurantCreateNestedManyWithoutCustomersInput";
export declare class CustomerCreateWithoutOrdersInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    updatedAt?: Date | undefined;
    token?: CustomerTokenCreateNestedManyWithoutCustomerInput | undefined;
    addresses?: CustomerAddressCreateNestedManyWithoutCustomerInput | undefined;
    restaurants?: RestaurantCreateNestedManyWithoutCustomersInput | undefined;
}
