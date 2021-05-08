import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCategoryScalarWhereInput } from "../inputs/ProductCategoryScalarWhereInput";
import { ProductCategoryUpdateManyMutationInput } from "../inputs/ProductCategoryUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductCategoryUpdateManyWithWhereWithoutRestaurantsInput {
  @TypeGraphQL.Field(_type => ProductCategoryScalarWhereInput, {
    nullable: false
  })
  where!: ProductCategoryScalarWhereInput;

  @TypeGraphQL.Field(_type => ProductCategoryUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProductCategoryUpdateManyMutationInput;
}
