import { CustomerAddressCreateNestedOneWithoutOrderInput } from "../inputs/CustomerAddressCreateNestedOneWithoutOrderInput";
import { CustomerCreateNestedOneWithoutOrdersInput } from "../inputs/CustomerCreateNestedOneWithoutOrdersInput";
import { OrderElementCreateNestedManyWithoutOrderInput } from "../inputs/OrderElementCreateNestedManyWithoutOrderInput";
import { ProductCreateNestedManyWithoutOrderInput } from "../inputs/ProductCreateNestedManyWithoutOrderInput";
import { RestaurantCreateNestedOneWithoutOrdersInput } from "../inputs/RestaurantCreateNestedOneWithoutOrdersInput";
export declare class OrderCreateInput {
    charges?: number | undefined;
    total?: number | undefined;
    isAccepted?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    elements?: OrderElementCreateNestedManyWithoutOrderInput | undefined;
    customerAddress: CustomerAddressCreateNestedOneWithoutOrderInput;
    restaurant?: RestaurantCreateNestedOneWithoutOrdersInput | undefined;
    customer?: CustomerCreateNestedOneWithoutOrdersInput | undefined;
    product?: ProductCreateNestedManyWithoutOrderInput | undefined;
}
