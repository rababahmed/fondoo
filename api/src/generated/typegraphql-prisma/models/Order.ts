import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Customer } from "../models/Customer";
import { CustomerAddress } from "../models/CustomerAddress";
import { OrderElement } from "../models/OrderElement";
import { Product } from "../models/Product";
import { Restaurant } from "../models/Restaurant";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Order {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  elements?: OrderElement[];

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  charges?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  total?: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isAccepted?: boolean | null;

  customerAddress?: CustomerAddress;

  restaurant?: Restaurant | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  restaurantId?: string | null;

  customer?: Customer | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  customerId?: number | null;

  product?: Product[];

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  customerAddressId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;
}
