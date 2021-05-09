import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateManyRestaurantInputEnvelope } from "../inputs/ProductCreateManyRestaurantInputEnvelope";
import { ProductCreateOrConnectWithoutRestaurantInput } from "../inputs/ProductCreateOrConnectWithoutRestaurantInput";
import { ProductCreateWithoutRestaurantInput } from "../inputs/ProductCreateWithoutRestaurantInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereWithoutRestaurantInput } from "../inputs/ProductUpdateManyWithWhereWithoutRestaurantInput";
import { ProductUpdateWithWhereUniqueWithoutRestaurantInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutRestaurantInput";
import { ProductUpsertWithWhereUniqueWithoutRestaurantInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutRestaurantInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductUpdateManyWithoutRestaurantInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutRestaurantInput], {
    nullable: true
  })
  create?: ProductCreateWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutRestaurantInput], {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpsertWithWhereUniqueWithoutRestaurantInput], {
    nullable: true
  })
  upsert?: ProductUpsertWithWhereUniqueWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductCreateManyRestaurantInputEnvelope, {
    nullable: true
  })
  createMany?: ProductCreateManyRestaurantInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ProductUpdateWithWhereUniqueWithoutRestaurantInput], {
    nullable: true
  })
  update?: ProductUpdateWithWhereUniqueWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpdateManyWithWhereWithoutRestaurantInput], {
    nullable: true
  })
  updateMany?: ProductUpdateManyWithWhereWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProductScalarWhereInput[] | undefined;
}
