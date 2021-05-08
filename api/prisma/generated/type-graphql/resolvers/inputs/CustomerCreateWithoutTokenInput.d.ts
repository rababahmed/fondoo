import { CartElementCreateNestedManyWithoutCustomerInput } from "../inputs/CartElementCreateNestedManyWithoutCustomerInput";
import { CustomerAddressCreateNestedManyWithoutCustomerInput } from "../inputs/CustomerAddressCreateNestedManyWithoutCustomerInput";
import { OrderCreateNestedManyWithoutCustomerInput } from "../inputs/OrderCreateNestedManyWithoutCustomerInput";
import { RestaurantCreateNestedOneWithoutCustomersInput } from "../inputs/RestaurantCreateNestedOneWithoutCustomersInput";
export declare class CustomerCreateWithoutTokenInput {
    createdAt?: Date | undefined;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    updatedAt?: Date | undefined;
    address?: CustomerAddressCreateNestedManyWithoutCustomerInput | undefined;
    orders?: OrderCreateNestedManyWithoutCustomerInput | undefined;
    cart?: CartElementCreateNestedManyWithoutCustomerInput | undefined;
    Restaurant?: RestaurantCreateNestedOneWithoutCustomersInput | undefined;
}
