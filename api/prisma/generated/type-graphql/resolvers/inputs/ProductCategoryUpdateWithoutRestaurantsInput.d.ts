import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrderElementUpdateManyWithoutCategoryInput } from "../inputs/OrderElementUpdateManyWithoutCategoryInput";
import { ProductUpdateManyWithoutCategoryInput } from "../inputs/ProductUpdateManyWithoutCategoryInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ProductCategoryUpdateWithoutRestaurantsInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    isActive?: NullableBoolFieldUpdateOperationsInput | undefined;
    isFeatured?: NullableBoolFieldUpdateOperationsInput | undefined;
    Product?: ProductUpdateManyWithoutCategoryInput | undefined;
    OrderElement?: OrderElementUpdateManyWithoutCategoryInput | undefined;
}
