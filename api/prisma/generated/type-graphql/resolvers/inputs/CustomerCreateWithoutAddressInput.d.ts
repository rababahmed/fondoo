import { CartElementCreateNestedManyWithoutCustomerInput } from "../inputs/CartElementCreateNestedManyWithoutCustomerInput";
import { CustomerTokenCreateNestedManyWithoutCustomerInput } from "../inputs/CustomerTokenCreateNestedManyWithoutCustomerInput";
import { OrderCreateNestedManyWithoutCustomerInput } from "../inputs/OrderCreateNestedManyWithoutCustomerInput";
import { RestaurantCreateNestedOneWithoutCustomersInput } from "../inputs/RestaurantCreateNestedOneWithoutCustomersInput";
export declare class CustomerCreateWithoutAddressInput {
    createdAt?: Date | undefined;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    updatedAt?: Date | undefined;
    token?: CustomerTokenCreateNestedManyWithoutCustomerInput | undefined;
    orders?: OrderCreateNestedManyWithoutCustomerInput | undefined;
    cart?: CartElementCreateNestedManyWithoutCustomerInput | undefined;
    Restaurant?: RestaurantCreateNestedOneWithoutCustomersInput | undefined;
}
