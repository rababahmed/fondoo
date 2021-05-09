import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCategoryCreateManyRestaurantsInputEnvelope } from "../inputs/ProductCategoryCreateManyRestaurantsInputEnvelope";
import { ProductCategoryCreateOrConnectWithoutRestaurantsInput } from "../inputs/ProductCategoryCreateOrConnectWithoutRestaurantsInput";
import { ProductCategoryCreateWithoutRestaurantsInput } from "../inputs/ProductCategoryCreateWithoutRestaurantsInput";
import { ProductCategoryScalarWhereInput } from "../inputs/ProductCategoryScalarWhereInput";
import { ProductCategoryUpdateManyWithWhereWithoutRestaurantsInput } from "../inputs/ProductCategoryUpdateManyWithWhereWithoutRestaurantsInput";
import { ProductCategoryUpdateWithWhereUniqueWithoutRestaurantsInput } from "../inputs/ProductCategoryUpdateWithWhereUniqueWithoutRestaurantsInput";
import { ProductCategoryUpsertWithWhereUniqueWithoutRestaurantsInput } from "../inputs/ProductCategoryUpsertWithWhereUniqueWithoutRestaurantsInput";
import { ProductCategoryWhereUniqueInput } from "../inputs/ProductCategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductCategoryUpdateManyWithoutRestaurantsInput {
  @TypeGraphQL.Field(_type => [ProductCategoryCreateWithoutRestaurantsInput], {
    nullable: true
  })
  create?: ProductCategoryCreateWithoutRestaurantsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCategoryCreateOrConnectWithoutRestaurantsInput], {
    nullable: true
  })
  connectOrCreate?: ProductCategoryCreateOrConnectWithoutRestaurantsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCategoryUpsertWithWhereUniqueWithoutRestaurantsInput], {
    nullable: true
  })
  upsert?: ProductCategoryUpsertWithWhereUniqueWithoutRestaurantsInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductCategoryCreateManyRestaurantsInputEnvelope, {
    nullable: true
  })
  createMany?: ProductCategoryCreateManyRestaurantsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProductCategoryWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductCategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCategoryWhereUniqueInput], {
    nullable: true
  })
  set?: ProductCategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCategoryWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProductCategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCategoryWhereUniqueInput], {
    nullable: true
  })
  delete?: ProductCategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCategoryUpdateWithWhereUniqueWithoutRestaurantsInput], {
    nullable: true
  })
  update?: ProductCategoryUpdateWithWhereUniqueWithoutRestaurantsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCategoryUpdateManyWithWhereWithoutRestaurantsInput], {
    nullable: true
  })
  updateMany?: ProductCategoryUpdateManyWithWhereWithoutRestaurantsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCategoryScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProductCategoryScalarWhereInput[] | undefined;
}
