import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Customer } from "../models/Customer";
import { Order } from "../models/Order";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class CustomerAddress {
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
  streetAddress!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  city!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  postCode!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  country!: string;

  Customer?: Customer | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  customerId?: number | null;

  Order?: Order[];
}
