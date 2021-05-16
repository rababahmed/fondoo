import { CustomerAddressUncheckedCreateNestedManyWithoutCustomerInput } from "../inputs/CustomerAddressUncheckedCreateNestedManyWithoutCustomerInput";
import { OrderUncheckedCreateNestedManyWithoutCustomerInput } from "../inputs/OrderUncheckedCreateNestedManyWithoutCustomerInput";
export declare class CustomerUncheckedCreateWithoutTokenInput {
    id?: number | undefined;
    createdAt?: Date | undefined;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    restaurantId?: string | undefined;
    updatedAt?: Date | undefined;
    address?: CustomerAddressUncheckedCreateNestedManyWithoutCustomerInput | undefined;
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput | undefined;
}
