import { CustomerAddressUncheckedCreateNestedManyWithoutCustomerInput } from "../inputs/CustomerAddressUncheckedCreateNestedManyWithoutCustomerInput";
import { CustomerTokenUncheckedCreateNestedManyWithoutCustomerInput } from "../inputs/CustomerTokenUncheckedCreateNestedManyWithoutCustomerInput";
import { OrderUncheckedCreateNestedManyWithoutCustomerInput } from "../inputs/OrderUncheckedCreateNestedManyWithoutCustomerInput";
export declare class CustomerUncheckedCreateWithoutRestaurantInput {
    id?: number | undefined;
    createdAt?: Date | undefined;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    updatedAt?: Date | undefined;
    token?: CustomerTokenUncheckedCreateNestedManyWithoutCustomerInput | undefined;
    address?: CustomerAddressUncheckedCreateNestedManyWithoutCustomerInput | undefined;
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput | undefined;
}
