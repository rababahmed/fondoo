import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateNestedManyWithoutProductCategoryInput } from "../inputs/ProductCreateNestedManyWithoutProductCategoryInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductCategoryCreateWithoutRestaurantsInput {
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

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isActive?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isFeatured?: boolean | undefined;

  @TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutProductCategoryInput, {
    nullable: true
  })
  Product?: ProductCreateNestedManyWithoutProductCategoryInput | undefined;
}
