import { CustomerAddressUncheckedCreateNestedManyWithoutCustomerInput } from "../inputs/CustomerAddressUncheckedCreateNestedManyWithoutCustomerInput";
import { CustomerTokenUncheckedCreateNestedManyWithoutCustomerInput } from "../inputs/CustomerTokenUncheckedCreateNestedManyWithoutCustomerInput";
export declare class CustomerUncheckedCreateWithoutOrdersInput {
    id?: number | undefined;
    createdAt?: Date | undefined;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    restaurantId?: string | undefined;
    updatedAt?: Date | undefined;
    token?: CustomerTokenUncheckedCreateNestedManyWithoutCustomerInput | undefined;
    address?: CustomerAddressUncheckedCreateNestedManyWithoutCustomerInput | undefined;
}
