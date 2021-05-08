import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateManyOrderInputEnvelope } from "../inputs/ProductCreateManyOrderInputEnvelope";
import { ProductCreateOrConnectWithoutOrderInput } from "../inputs/ProductCreateOrConnectWithoutOrderInput";
import { ProductCreateWithoutOrderInput } from "../inputs/ProductCreateWithoutOrderInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereWithoutOrderInput } from "../inputs/ProductUpdateManyWithWhereWithoutOrderInput";
import { ProductUpdateWithWhereUniqueWithoutOrderInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutOrderInput";
import { ProductUpsertWithWhereUniqueWithoutOrderInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutOrderInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductUpdateManyWithoutOrderInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutOrderInput], {
    nullable: true
  })
  create?: ProductCreateWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutOrderInput], {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpsertWithWhereUniqueWithoutOrderInput], {
    nullable: true
  })
  upsert?: ProductUpsertWithWhereUniqueWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductCreateManyOrderInputEnvelope, {
    nullable: true
  })
  createMany?: ProductCreateManyOrderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  set?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  delete?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpdateWithWhereUniqueWithoutOrderInput], {
    nullable: true
  })
  update?: ProductUpdateWithWhereUniqueWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpdateManyWithWhereWithoutOrderInput], {
    nullable: true
  })
  updateMany?: ProductUpdateManyWithWhereWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProductScalarWhereInput[] | undefined;
}
