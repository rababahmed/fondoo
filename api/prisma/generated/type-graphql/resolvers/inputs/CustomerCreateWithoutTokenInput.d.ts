import { CustomerAddressCreateNestedManyWithoutCustomerInput } from "../inputs/CustomerAddressCreateNestedManyWithoutCustomerInput";
import { OrderCreateNestedManyWithoutCustomerInput } from "../inputs/OrderCreateNestedManyWithoutCustomerInput";
import { RestaurantCreateNestedManyWithoutCustomersInput } from "../inputs/RestaurantCreateNestedManyWithoutCustomersInput";
export declare class CustomerCreateWithoutTokenInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    updatedAt?: Date | undefined;
    addresses?: CustomerAddressCreateNestedManyWithoutCustomerInput | undefined;
    orders?: OrderCreateNestedManyWithoutCustomerInput | undefined;
    restaurants?: RestaurantCreateNestedManyWithoutCustomersInput | undefined;
}
