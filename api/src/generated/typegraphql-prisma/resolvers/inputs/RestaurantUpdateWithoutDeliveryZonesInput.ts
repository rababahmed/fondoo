import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerUpdateManyWithoutRestaurantInput } from "../inputs/CustomerUpdateManyWithoutRestaurantInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrderUpdateManyWithoutRestaurantInput } from "../inputs/OrderUpdateManyWithoutRestaurantInput";
import { ProductCategoryUpdateManyWithoutRestaurantsInput } from "../inputs/ProductCategoryUpdateManyWithoutRestaurantsInput";
import { ProductUpdateManyWithoutRestaurantInput } from "../inputs/ProductUpdateManyWithoutRestaurantInput";
import { ScheduleUpdateManyWithoutRestaurantInput } from "../inputs/ScheduleUpdateManyWithoutRestaurantInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateManyWithoutRestaurantInput } from "../inputs/UserUpdateManyWithoutRestaurantInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RestaurantUpdateWithoutDeliveryZonesInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  businessPhone?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  reservationPhone?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  url?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  address?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  city?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  postCode?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  country?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  currency?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  priceRange?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  diningStyle?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  vat?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  serviceCharge?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  hasParking?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  hasPartyFacilities?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  hasKidsZone?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isTakeaway?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isDelivery?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isReservation?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isOrdering?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isAutoAcceptOrder?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isAutoAcceptReservation?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ScheduleUpdateManyWithoutRestaurantInput, {
    nullable: true
  })
  schedule?: ScheduleUpdateManyWithoutRestaurantInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpdateManyWithoutRestaurantInput, {
    nullable: true
  })
  customers?: CustomerUpdateManyWithoutRestaurantInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpdateManyWithoutRestaurantInput, {
    nullable: true
  })
  orders?: OrderUpdateManyWithoutRestaurantInput | undefined;

  @TypeGraphQL.Field(_type => ProductCategoryUpdateManyWithoutRestaurantsInput, {
    nullable: true
  })
  productCategory?: ProductCategoryUpdateManyWithoutRestaurantsInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateManyWithoutRestaurantInput, {
    nullable: true
  })
  products?: ProductUpdateManyWithoutRestaurantInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateManyWithoutRestaurantInput, {
    nullable: true
  })
  users?: UserUpdateManyWithoutRestaurantInput | undefined;
}
