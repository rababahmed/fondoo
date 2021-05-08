import { CustomerCreateNestedOneWithoutOrdersInput } from "../inputs/CustomerCreateNestedOneWithoutOrdersInput";
import { OrderElementCreateNestedManyWithoutOrderInput } from "../inputs/OrderElementCreateNestedManyWithoutOrderInput";
import { ProductCreateNestedManyWithoutOrderInput } from "../inputs/ProductCreateNestedManyWithoutOrderInput";
import { RestaurantCreateNestedOneWithoutOrdersInput } from "../inputs/RestaurantCreateNestedOneWithoutOrdersInput";
export declare class OrderCreateWithoutCustomerAddressInput {
    charges?: number | undefined;
    total?: number | undefined;
    isAccepted?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    elements?: OrderElementCreateNestedManyWithoutOrderInput | undefined;
    restaurant?: RestaurantCreateNestedOneWithoutOrdersInput | undefined;
    customer?: CustomerCreateNestedOneWithoutOrdersInput | undefined;
    product?: ProductCreateNestedManyWithoutOrderInput | undefined;
}
