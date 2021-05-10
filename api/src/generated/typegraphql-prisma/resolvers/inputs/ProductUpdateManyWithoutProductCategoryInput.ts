import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateManyProductCategoryInputEnvelope } from "../inputs/ProductCreateManyProductCategoryInputEnvelope";
import { ProductCreateOrConnectWithoutProductCategoryInput } from "../inputs/ProductCreateOrConnectWithoutProductCategoryInput";
import { ProductCreateWithoutProductCategoryInput } from "../inputs/ProductCreateWithoutProductCategoryInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereWithoutProductCategoryInput } from "../inputs/ProductUpdateManyWithWhereWithoutProductCategoryInput";
import { ProductUpdateWithWhereUniqueWithoutProductCategoryInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutProductCategoryInput";
import { ProductUpsertWithWhereUniqueWithoutProductCategoryInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutProductCategoryInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductUpdateManyWithoutProductCategoryInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutProductCategoryInput], {
    nullable: true
  })
  create?: ProductCreateWithoutProductCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutProductCategoryInput], {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutProductCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpsertWithWhereUniqueWithoutProductCategoryInput], {
    nullable: true
  })
  upsert?: ProductUpsertWithWhereUniqueWithoutProductCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductCreateManyProductCategoryInputEnvelope, {
    nullable: true
  })
  createMany?: ProductCreateManyProductCategoryInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ProductUpdateWithWhereUniqueWithoutProductCategoryInput], {
    nullable: true
  })
  update?: ProductUpdateWithWhereUniqueWithoutProductCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpdateManyWithWhereWithoutProductCategoryInput], {
    nullable: true
  })
  updateMany?: ProductUpdateManyWithWhereWithoutProductCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProductScalarWhereInput[] | undefined;
}
