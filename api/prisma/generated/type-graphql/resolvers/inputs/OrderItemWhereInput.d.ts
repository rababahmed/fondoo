import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumSpiceLevelFilter } from "../inputs/EnumSpiceLevelFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { OrderRelationFilter } from "../inputs/OrderRelationFilter";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";
import { RestaurantRelationFilter } from "../inputs/RestaurantRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class OrderItemWhereInput {
    AND?: OrderItemWhereInput[] | undefined;
    OR?: OrderItemWhereInput[] | undefined;
    NOT?: OrderItemWhereInput[] | undefined;
    id?: StringFilter | undefined;
    product?: ProductRelationFilter | undefined;
    quantity?: IntFilter | undefined;
    total?: IntFilter | undefined;
    spiceLevel?: EnumSpiceLevelFilter | undefined;
    productId?: StringFilter | undefined;
    Order?: OrderRelationFilter | undefined;
    orderId?: IntNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    Restaurant?: RestaurantRelationFilter | undefined;
    restaurantId?: StringNullableFilter | undefined;
}
