import { CustomerAddressCreateNestedManyWithoutCustomerInput } from "../inputs/CustomerAddressCreateNestedManyWithoutCustomerInput";
import { CustomerTokenCreateNestedManyWithoutCustomerInput } from "../inputs/CustomerTokenCreateNestedManyWithoutCustomerInput";
import { OrderCreateNestedManyWithoutCustomerInput } from "../inputs/OrderCreateNestedManyWithoutCustomerInput";
import { RestaurantCreateNestedManyWithoutCustomersInput } from "../inputs/RestaurantCreateNestedManyWithoutCustomersInput";
export declare class CustomerCreateInput {
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
    orders?: OrderCreateNestedManyWithoutCustomerInput | undefined;
    restaurants?: RestaurantCreateNestedManyWithoutCustomersInput | undefined;
}
