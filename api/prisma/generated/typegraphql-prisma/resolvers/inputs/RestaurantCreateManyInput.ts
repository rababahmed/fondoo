import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RestaurantCreateManyInput {
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
}
