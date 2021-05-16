import { CustomerTokenUncheckedCreateNestedManyWithoutCustomerInput } from "../inputs/CustomerTokenUncheckedCreateNestedManyWithoutCustomerInput";
import { OrderUncheckedCreateNestedManyWithoutCustomerInput } from "../inputs/OrderUncheckedCreateNestedManyWithoutCustomerInput";
export declare class CustomerUncheckedCreateWithoutAddressInput {
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
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput | undefined;
}
