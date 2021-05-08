import { CartElementUpdateManyWithoutProductInput } from "../inputs/CartElementUpdateManyWithoutProductInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumSpiceLevelFieldUpdateOperationsInput } from "../inputs/EnumSpiceLevelFieldUpdateOperationsInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrderUpdateOneWithoutProductInput } from "../inputs/OrderUpdateOneWithoutProductInput";
import { ProductCategoryUpdateOneRequiredWithoutProductInput } from "../inputs/ProductCategoryUpdateOneRequiredWithoutProductInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ProductUpdateWithoutRestaurantInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    price?: NullableIntFieldUpdateOperationsInput | undefined;
    spiceLevel?: EnumSpiceLevelFieldUpdateOperationsInput | undefined;
    isPopular?: NullableBoolFieldUpdateOperationsInput | undefined;
    isActive?: NullableBoolFieldUpdateOperationsInput | undefined;
    category?: ProductCategoryUpdateOneRequiredWithoutProductInput | undefined;
    Order?: OrderUpdateOneWithoutProductInput | undefined;
    CartElement?: CartElementUpdateManyWithoutProductInput | undefined;
}
