import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateWithoutOrderInput } from "../inputs/ProductUpdateWithoutOrderInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductUpdateWithWhereUniqueWithoutOrderInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutOrderInput, {
    nullable: false
  })
  data!: ProductUpdateWithoutOrderInput;
}
