import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrderElementUpdateManyWithoutCategoryInput } from "../inputs/OrderElementUpdateManyWithoutCategoryInput";
import { ProductUpdateManyWithoutCategoryInput } from "../inputs/ProductUpdateManyWithoutCategoryInput";
import { RestaurantUpdateOneRequiredWithoutProductCategoryInput } from "../inputs/RestaurantUpdateOneRequiredWithoutProductCategoryInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ProductCategoryUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    isActive?: NullableBoolFieldUpdateOperationsInput | undefined;
    isFeatured?: NullableBoolFieldUpdateOperationsInput | undefined;
    restaurants?: RestaurantUpdateOneRequiredWithoutProductCategoryInput | undefined;
    Product?: ProductUpdateManyWithoutCategoryInput | undefined;
    OrderElement?: OrderElementUpdateManyWithoutCategoryInput | undefined;
}
