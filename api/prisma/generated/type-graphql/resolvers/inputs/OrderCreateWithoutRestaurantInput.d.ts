import { CustomerAddressCreateNestedOneWithoutOrderInput } from "../inputs/CustomerAddressCreateNestedOneWithoutOrderInput";
import { CustomerCreateNestedOneWithoutOrdersInput } from "../inputs/CustomerCreateNestedOneWithoutOrdersInput";
import { OrderElementCreateNestedManyWithoutOrderInput } from "../inputs/OrderElementCreateNestedManyWithoutOrderInput";
import { ProductCreateNestedManyWithoutOrderInput } from "../inputs/ProductCreateNestedManyWithoutOrderInput";
export declare class OrderCreateWithoutRestaurantInput {
    charges?: number | undefined;
    total?: number | undefined;
    isAccepted?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    elements?: OrderElementCreateNestedManyWithoutOrderInput | undefined;
    customerAddress: CustomerAddressCreateNestedOneWithoutOrderInput;
    customer?: CustomerCreateNestedOneWithoutOrdersInput | undefined;
    product?: ProductCreateNestedManyWithoutOrderInput | undefined;
}
