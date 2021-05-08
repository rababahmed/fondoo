import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class OrderScalarWhereInput {
    AND?: OrderScalarWhereInput[] | undefined;
    OR?: OrderScalarWhereInput[] | undefined;
    NOT?: OrderScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    charges?: IntNullableFilter | undefined;
    total?: IntNullableFilter | undefined;
    isAccepted?: BoolNullableFilter | undefined;
    restaurantId?: StringNullableFilter | undefined;
    customerId?: IntNullableFilter | undefined;
    customerAddressId?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
