import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumSpiceLevelFieldUpdateOperationsInput } from "../inputs/EnumSpiceLevelFieldUpdateOperationsInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrderItemUpdateManyWithoutProductInput } from "../inputs/OrderItemUpdateManyWithoutProductInput";
import { ProductCategoryUpdateOneWithoutProductInput } from "../inputs/ProductCategoryUpdateOneWithoutProductInput";
import { RestaurantUpdateOneWithoutProductsInput } from "../inputs/RestaurantUpdateOneWithoutProductsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ProductUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    price?: NullableIntFieldUpdateOperationsInput | undefined;
    spiceLevel?: EnumSpiceLevelFieldUpdateOperationsInput | undefined;
    isPopular?: NullableBoolFieldUpdateOperationsInput | undefined;
    isActive?: NullableBoolFieldUpdateOperationsInput | undefined;
    ProductCategory?: ProductCategoryUpdateOneWithoutProductInput | undefined;
    Restaurant?: RestaurantUpdateOneWithoutProductsInput | undefined;
    OrderItem?: OrderItemUpdateManyWithoutProductInput | undefined;
}
