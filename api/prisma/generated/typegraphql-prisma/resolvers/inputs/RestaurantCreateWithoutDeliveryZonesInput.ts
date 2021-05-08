import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateNestedManyWithoutRestaurantInput } from "../inputs/CustomerCreateNestedManyWithoutRestaurantInput";
import { OrderCreateNestedManyWithoutRestaurantInput } from "../inputs/OrderCreateNestedManyWithoutRestaurantInput";
import { ProductCategoryCreateNestedManyWithoutRestaurantsInput } from "../inputs/ProductCategoryCreateNestedManyWithoutRestaurantsInput";
import { ProductCreateNestedManyWithoutRestaurantInput } from "../inputs/ProductCreateNestedManyWithoutRestaurantInput";
import { ScheduleCreateNestedManyWithoutRestaurantInput } from "../inputs/ScheduleCreateNestedManyWithoutRestaurantInput";
import { UserCreateNestedManyWithoutRestaurantsInput } from "../inputs/UserCreateNestedManyWithoutRestaurantsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RestaurantCreateWithoutDeliveryZonesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  businessPhone?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reservationPhone?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  city?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  postCode?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  currency?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  priceRange?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  diningStyle?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  vat?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  serviceCharge?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  hasParking?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  hasPartyFacilities?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  hasKidsZone?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isTakeaway?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isDelivery?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isReservation?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isOrdering?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isAutoAcceptOrder?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isAutoAcceptReservation?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutRestaurantInput, {
    nullable: true
  })
  products?: ProductCreateNestedManyWithoutRestaurantInput | undefined;

  @TypeGraphQL.Field(_type => ScheduleCreateNestedManyWithoutRestaurantInput, {
    nullable: true
  })
  schedule?: ScheduleCreateNestedManyWithoutRestaurantInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateNestedManyWithoutRestaurantInput, {
    nullable: true
  })
  customers?: CustomerCreateNestedManyWithoutRestaurantInput | undefined;

  @TypeGraphQL.Field(_type => OrderCreateNestedManyWithoutRestaurantInput, {
    nullable: true
  })
  orders?: OrderCreateNestedManyWithoutRestaurantInput | undefined;

  @TypeGraphQL.Field(_type => ProductCategoryCreateNestedManyWithoutRestaurantsInput, {
    nullable: true
  })
  productCategory?: ProductCategoryCreateNestedManyWithoutRestaurantsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutRestaurantsInput, {
    nullable: true
  })
  users?: UserCreateNestedManyWithoutRestaurantsInput | undefined;
}
