import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { CartElement } from "../models/CartElement";
import { CustomerAddress } from "../models/CustomerAddress";
import { CustomerToken } from "../models/CustomerToken";
import { Order } from "../models/Order";
import { Restaurant } from "../models/Restaurant";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Customer {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  firstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lastName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  phone!: string;

  token?: CustomerToken[];

  address?: CustomerAddress[];

  orders?: Order[];

  cart?: CartElement[];

  Restaurant?: Restaurant | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  restaurantId?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;
}
