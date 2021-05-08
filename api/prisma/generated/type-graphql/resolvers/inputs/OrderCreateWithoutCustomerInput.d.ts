import { CustomerAddressCreateNestedOneWithoutOrderInput } from "../inputs/CustomerAddressCreateNestedOneWithoutOrderInput";
import { OrderElementCreateNestedManyWithoutOrderInput } from "../inputs/OrderElementCreateNestedManyWithoutOrderInput";
import { ProductCreateNestedManyWithoutOrderInput } from "../inputs/ProductCreateNestedManyWithoutOrderInput";
import { RestaurantCreateNestedOneWithoutOrdersInput } from "../inputs/RestaurantCreateNestedOneWithoutOrdersInput";
export declare class OrderCreateWithoutCustomerInput {
    charges?: number | undefined;
    total?: number | undefined;
    isAccepted?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    elements?: OrderElementCreateNestedManyWithoutOrderInput | undefined;
    customerAddress: CustomerAddressCreateNestedOneWithoutOrderInput;
    restaurant?: RestaurantCreateNestedOneWithoutOrdersInput | undefined;
    product?: ProductCreateNestedManyWithoutOrderInput | undefined;
}
