import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderElementCreateManyOrderInputEnvelope } from "../inputs/OrderElementCreateManyOrderInputEnvelope";
import { OrderElementCreateOrConnectWithoutOrderInput } from "../inputs/OrderElementCreateOrConnectWithoutOrderInput";
import { OrderElementCreateWithoutOrderInput } from "../inputs/OrderElementCreateWithoutOrderInput";
import { OrderElementScalarWhereInput } from "../inputs/OrderElementScalarWhereInput";
import { OrderElementUpdateManyWithWhereWithoutOrderInput } from "../inputs/OrderElementUpdateManyWithWhereWithoutOrderInput";
import { OrderElementUpdateWithWhereUniqueWithoutOrderInput } from "../inputs/OrderElementUpdateWithWhereUniqueWithoutOrderInput";
import { OrderElementUpsertWithWhereUniqueWithoutOrderInput } from "../inputs/OrderElementUpsertWithWhereUniqueWithoutOrderInput";
import { OrderElementWhereUniqueInput } from "../inputs/OrderElementWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderElementUpdateManyWithoutOrderInput {
  @TypeGraphQL.Field(_type => [OrderElementCreateWithoutOrderInput], {
    nullable: true
  })
  create?: OrderElementCreateWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderElementCreateOrConnectWithoutOrderInput], {
    nullable: true
  })
  connectOrCreate?: OrderElementCreateOrConnectWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderElementUpsertWithWhereUniqueWithoutOrderInput], {
    nullable: true
  })
  upsert?: OrderElementUpsertWithWhereUniqueWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderElementCreateManyOrderInputEnvelope, {
    nullable: true
  })
  createMany?: OrderElementCreateManyOrderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OrderElementWhereUniqueInput], {
    nullable: true
  })
  connect?: OrderElementWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderElementWhereUniqueInput], {
    nullable: true
  })
  set?: OrderElementWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderElementWhereUniqueInput], {
    nullable: true
  })
  disconnect?: OrderElementWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderElementWhereUniqueInput], {
    nullable: true
  })
  delete?: OrderElementWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderElementUpdateWithWhereUniqueWithoutOrderInput], {
    nullable: true
  })
  update?: OrderElementUpdateWithWhereUniqueWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderElementUpdateManyWithWhereWithoutOrderInput], {
    nullable: true
  })
  updateMany?: OrderElementUpdateManyWithWhereWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderElementScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OrderElementScalarWhereInput[] | undefined;
}
