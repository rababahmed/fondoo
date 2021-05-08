import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RestaurantCountAggregate } from "../outputs/RestaurantCountAggregate";
import { RestaurantMaxAggregate } from "../outputs/RestaurantMaxAggregate";
import { RestaurantMinAggregate } from "../outputs/RestaurantMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class RestaurantGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

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
  businessPhone!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reservationPhone!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  city!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  postCode!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  currency!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  priceRange!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  diningStyle!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  vat!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  serviceCharge!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  hasParking!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  hasPartyFacilities!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  hasKidsZone!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isTakeaway!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isDelivery!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isReservation!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isOrdering!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isAutoAcceptOrder!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isAutoAcceptReservation!: boolean | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => RestaurantCountAggregate, {
    nullable: true
  })
  count!: RestaurantCountAggregate | null;

  @TypeGraphQL.Field(_type => RestaurantMinAggregate, {
    nullable: true
  })
  min!: RestaurantMinAggregate | null;

  @TypeGraphQL.Field(_type => RestaurantMaxAggregate, {
    nullable: true
  })
  max!: RestaurantMaxAggregate | null;
}
