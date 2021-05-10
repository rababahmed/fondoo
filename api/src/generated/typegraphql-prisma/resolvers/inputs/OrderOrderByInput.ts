import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderOrderByInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  items?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  coupon?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  deliveryCharges?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  vat?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  serviceCharge?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  total?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isAccepted?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  restaurantId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customerId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customerAddressId?: "asc" | "desc" | undefined;
}
