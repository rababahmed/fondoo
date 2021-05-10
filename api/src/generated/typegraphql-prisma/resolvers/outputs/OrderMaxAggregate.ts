import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class OrderMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  coupon!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  deliveryCharges!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  vat!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  serviceCharge!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  total!: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isAccepted!: boolean | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  userId!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  restaurantId!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  customerId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  customerAddressId!: number | null;
}
