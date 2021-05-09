import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutCartElementInput } from "../inputs/ProductCreateOrConnectWithoutCartElementInput";
import { ProductCreateWithoutCartElementInput } from "../inputs/ProductCreateWithoutCartElementInput";
import { ProductUpdateWithoutCartElementInput } from "../inputs/ProductUpdateWithoutCartElementInput";
import { ProductUpsertWithoutCartElementInput } from "../inputs/ProductUpsertWithoutCartElementInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductUpdateOneRequiredWithoutCartElementInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutCartElementInput, {
    nullable: true
  })
  create?: ProductCreateWithoutCartElementInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutCartElementInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutCartElementInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpsertWithoutCartElementInput, {
    nullable: true
  })
  upsert?: ProductUpsertWithoutCartElementInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutCartElementInput, {
    nullable: true
  })
  update?: ProductUpdateWithoutCartElementInput | undefined;
}
