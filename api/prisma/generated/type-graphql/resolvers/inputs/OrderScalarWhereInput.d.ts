import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class OrderScalarWhereInput {
    AND?: OrderScalarWhereInput[] | undefined;
    OR?: OrderScalarWhereInput[] | undefined;
    NOT?: OrderScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    address?: StringNullableFilter | undefined;
    discount?: FloatFilter | undefined;
    deliveryCharges?: FloatFilter | undefined;
    vat?: FloatFilter | undefined;
    serviceCharge?: FloatFilter | undefined;
    total?: FloatFilter | undefined;
    isAccepted?: BoolFilter | undefined;
    couponId?: StringNullableFilter | undefined;
    restaurantId?: StringFilter | undefined;
    customerId?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
