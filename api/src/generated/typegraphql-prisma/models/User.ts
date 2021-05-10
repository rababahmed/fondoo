import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Order } from "../models/Order";
import { Restaurant } from "../models/Restaurant";
import { UserToken } from "../models/UserToken";
import { Role } from "../enums/Role";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class User {
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
  fullName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phone?: string | null;

  token?: UserToken[];

  @TypeGraphQL.Field(_type => Role, {
    nullable: false
  })
  role!: "Manager" | "Owner" | "Admin" | "SuperAdmin";

  Restaurant?: Restaurant | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  restaurantId?: string | null;

  orders?: Order[];
}
