import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateManyRestaurantInputEnvelope } from "../inputs/OrderCreateManyRestaurantInputEnvelope";
import { OrderCreateOrConnectWithoutRestaurantInput } from "../inputs/OrderCreateOrConnectWithoutRestaurantInput";
import { OrderCreateWithoutRestaurantInput } from "../inputs/OrderCreateWithoutRestaurantInput";
import { OrderScalarWhereInput } from "../inputs/OrderScalarWhereInput";
import { OrderUpdateManyWithWhereWithoutRestaurantInput } from "../inputs/OrderUpdateManyWithWhereWithoutRestaurantInput";
import { OrderUpdateWithWhereUniqueWithoutRestaurantInput } from "../inputs/OrderUpdateWithWhereUniqueWithoutRestaurantInput";
import { OrderUpsertWithWhereUniqueWithoutRestaurantInput } from "../inputs/OrderUpsertWithWhereUniqueWithoutRestaurantInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderUpdateManyWithoutRestaurantInput {
  @TypeGraphQL.Field(_type => [OrderCreateWithoutRestaurantInput], {
    nullable: true
  })
  create?: OrderCreateWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutRestaurantInput], {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderUpsertWithWhereUniqueWithoutRestaurantInput], {
    nullable: true
  })
  upsert?: OrderUpsertWithWhereUniqueWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderCreateManyRestaurantInputEnvelope, {
    nullable: true
  })
  createMany?: OrderCreateManyRestaurantInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  connect?: OrderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  set?: OrderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  disconnect?: OrderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  delete?: OrderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderUpdateWithWhereUniqueWithoutRestaurantInput], {
    nullable: true
  })
  update?: OrderUpdateWithWhereUniqueWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderUpdateManyWithWhereWithoutRestaurantInput], {
    nullable: true
  })
  updateMany?: OrderUpdateManyWithWhereWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OrderScalarWhereInput[] | undefined;
}
