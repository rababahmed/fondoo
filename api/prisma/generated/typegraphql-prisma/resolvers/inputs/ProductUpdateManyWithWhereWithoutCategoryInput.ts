import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyMutationInput } from "../inputs/ProductUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductUpdateManyWithWhereWithoutCategoryInput {
  @TypeGraphQL.Field(_type => ProductScalarWhereInput, {
    nullable: false
  })
  where!: ProductScalarWhereInput;

  @TypeGraphQL.Field(_type => ProductUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProductUpdateManyMutationInput;
}
