import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutCartElementInput } from "../inputs/ProductCreateOrConnectWithoutCartElementInput";
import { ProductCreateWithoutCartElementInput } from "../inputs/ProductCreateWithoutCartElementInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductCreateNestedOneWithoutCartElementInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutCartElementInput, {
    nullable: true
  })
  create?: ProductCreateWithoutCartElementInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutCartElementInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutCartElementInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;
}
