import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateNestedManyWithoutCategoryInput } from "../inputs/ProductCreateNestedManyWithoutCategoryInput";
import { RestaurantCreateNestedOneWithoutProductCategoryInput } from "../inputs/RestaurantCreateNestedOneWithoutProductCategoryInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductCategoryCreateWithoutOrderElementInput {
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

  @TypeGraphQL.Field(_type => RestaurantCreateNestedOneWithoutProductCategoryInput, {
    nullable: false
  })
  restaurants!: RestaurantCreateNestedOneWithoutProductCategoryInput;

  @TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutCategoryInput, {
    nullable: true
  })
  Product?: ProductCreateNestedManyWithoutCategoryInput | undefined;
}
