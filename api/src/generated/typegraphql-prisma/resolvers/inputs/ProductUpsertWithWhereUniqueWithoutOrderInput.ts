import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutOrderInput } from "../inputs/ProductCreateWithoutOrderInput";
import { ProductUpdateWithoutOrderInput } from "../inputs/ProductUpdateWithoutOrderInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductUpsertWithWhereUniqueWithoutOrderInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutOrderInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutOrderInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutOrderInput, {
    nullable: false
  })
  create!: ProductCreateWithoutOrderInput;
}
