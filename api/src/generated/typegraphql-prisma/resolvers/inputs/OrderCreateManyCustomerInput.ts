import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderCreateManyCustomerInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  items!: Prisma.InputJsonValue;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  coupon?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  deliveryCharges!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  vat!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  serviceCharge!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  total!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isAccepted!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  restaurantId!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  customerAddressId?: number | undefined;
}
