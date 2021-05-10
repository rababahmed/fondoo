import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Product } from "../models/Product";
import { Restaurant } from "../models/Restaurant";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class ProductCategory {
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
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isActive?: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isFeatured?: boolean | null;

  restaurants?: Restaurant;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  restaurantId!: string;

  Product?: Product[];
}
