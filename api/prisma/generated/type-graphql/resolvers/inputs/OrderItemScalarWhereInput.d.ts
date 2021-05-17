import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumSpiceLevelFilter } from "../inputs/EnumSpiceLevelFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class OrderItemScalarWhereInput {
    AND?: OrderItemScalarWhereInput[] | undefined;
    OR?: OrderItemScalarWhereInput[] | undefined;
    NOT?: OrderItemScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    quantity?: IntFilter | undefined;
    total?: IntFilter | undefined;
    spiceLevel?: EnumSpiceLevelFilter | undefined;
    productId?: StringFilter | undefined;
    orderId?: IntNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    restaurantId?: StringNullableFilter | undefined;
}
