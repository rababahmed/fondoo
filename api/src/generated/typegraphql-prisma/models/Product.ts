import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ProductCategory } from "../models/ProductCategory";
import { Restaurant } from "../models/Restaurant";
import { SpiceLevel } from "../enums/SpiceLevel";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Product {
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

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  price?: number | null;

  @TypeGraphQL.Field(_type => SpiceLevel, {
    nullable: false
  })
  spiceLevel!: "None" | "Mild" | "Medium" | "Hot" | "ExtraHot";

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isPopular?: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isActive?: boolean | null;

  ProductCategory?: ProductCategory | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  productCategoryId?: string | null;

  Restaurant?: Restaurant | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  restaurantId?: string | null;
}
