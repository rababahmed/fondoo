import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Customer } from "../models/Customer";
import { CustomerAddress } from "../models/CustomerAddress";
import { Restaurant } from "../models/Restaurant";
import { User } from "../models/User";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Order {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  items!: Prisma.JsonValue;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  coupon?: string | null;

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

  user?: User;

  restaurant?: Restaurant;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  restaurantId!: string;

  Customer?: Customer | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  customerId?: number | null;

  CustomerAddress?: CustomerAddress | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  customerAddressId?: number | null;
}
