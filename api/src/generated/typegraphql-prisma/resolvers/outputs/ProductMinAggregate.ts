import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SpiceLevel } from "../../enums/SpiceLevel";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class ProductMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  price!: number | null;

  @TypeGraphQL.Field(_type => SpiceLevel, {
    nullable: true
  })
  spiceLevel!: "None" | "Mild" | "Medium" | "Hot" | "ExtraHot" | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isPopular!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isActive!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  productCategoryId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  restaurantId!: string | null;
}
