import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SpiceLevel } from "../../enums/SpiceLevel";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductCreateManyProductCategoryInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  price?: number | undefined;

  @TypeGraphQL.Field(_type => SpiceLevel, {
    nullable: true
  })
  spiceLevel?: "None" | "Mild" | "Medium" | "Hot" | "ExtraHot" | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isPopular?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isActive?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  restaurantId?: string | undefined;
}
