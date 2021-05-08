import { CustomerAddressCreateNestedManyWithoutCustomerInput } from "../inputs/CustomerAddressCreateNestedManyWithoutCustomerInput";
import { CustomerTokenCreateNestedManyWithoutCustomerInput } from "../inputs/CustomerTokenCreateNestedManyWithoutCustomerInput";
import { OrderCreateNestedManyWithoutCustomerInput } from "../inputs/OrderCreateNestedManyWithoutCustomerInput";
import { RestaurantCreateNestedOneWithoutCustomersInput } from "../inputs/RestaurantCreateNestedOneWithoutCustomersInput";
export declare class CustomerCreateWithoutCartInput {
    createdAt?: Date | undefined;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    updatedAt?: Date | undefined;
    token?: CustomerTokenCreateNestedManyWithoutCustomerInput | undefined;
    address?: CustomerAddressCreateNestedManyWithoutCustomerInput | undefined;
    orders?: OrderCreateNestedManyWithoutCustomerInput | undefined;
    Restaurant?: RestaurantCreateNestedOneWithoutCustomersInput | undefined;
}
