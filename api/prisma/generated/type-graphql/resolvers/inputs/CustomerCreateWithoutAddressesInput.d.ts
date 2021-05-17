import { CustomerTokenCreateNestedManyWithoutCustomerInput } from "../inputs/CustomerTokenCreateNestedManyWithoutCustomerInput";
import { OrderCreateNestedManyWithoutCustomerInput } from "../inputs/OrderCreateNestedManyWithoutCustomerInput";
import { RestaurantCreateNestedManyWithoutCustomersInput } from "../inputs/RestaurantCreateNestedManyWithoutCustomersInput";
export declare class CustomerCreateWithoutAddressesInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    updatedAt?: Date | undefined;
    token?: CustomerTokenCreateNestedManyWithoutCustomerInput | undefined;
    orders?: OrderCreateNestedManyWithoutCustomerInput | undefined;
    restaurants?: RestaurantCreateNestedManyWithoutCustomersInput | undefined;
}
