import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ScheduleCreateManyRestaurantInputEnvelope } from "../inputs/ScheduleCreateManyRestaurantInputEnvelope";
import { ScheduleCreateOrConnectWithoutRestaurantInput } from "../inputs/ScheduleCreateOrConnectWithoutRestaurantInput";
import { ScheduleCreateWithoutRestaurantInput } from "../inputs/ScheduleCreateWithoutRestaurantInput";
import { ScheduleScalarWhereInput } from "../inputs/ScheduleScalarWhereInput";
import { ScheduleUpdateManyWithWhereWithoutRestaurantInput } from "../inputs/ScheduleUpdateManyWithWhereWithoutRestaurantInput";
import { ScheduleUpdateWithWhereUniqueWithoutRestaurantInput } from "../inputs/ScheduleUpdateWithWhereUniqueWithoutRestaurantInput";
import { ScheduleUpsertWithWhereUniqueWithoutRestaurantInput } from "../inputs/ScheduleUpsertWithWhereUniqueWithoutRestaurantInput";
import { ScheduleWhereUniqueInput } from "../inputs/ScheduleWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ScheduleUpdateManyWithoutRestaurantInput {
  @TypeGraphQL.Field(_type => [ScheduleCreateWithoutRestaurantInput], {
    nullable: true
  })
  create?: ScheduleCreateWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => [ScheduleCreateOrConnectWithoutRestaurantInput], {
    nullable: true
  })
  connectOrCreate?: ScheduleCreateOrConnectWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => [ScheduleUpsertWithWhereUniqueWithoutRestaurantInput], {
    nullable: true
  })
  upsert?: ScheduleUpsertWithWhereUniqueWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => ScheduleCreateManyRestaurantInputEnvelope, {
    nullable: true
  })
  createMany?: ScheduleCreateManyRestaurantInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ScheduleWhereUniqueInput], {
    nullable: true
  })
  connect?: ScheduleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ScheduleWhereUniqueInput], {
    nullable: true
  })
  set?: ScheduleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ScheduleWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ScheduleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ScheduleWhereUniqueInput], {
    nullable: true
  })
  delete?: ScheduleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ScheduleUpdateWithWhereUniqueWithoutRestaurantInput], {
    nullable: true
  })
  update?: ScheduleUpdateWithWhereUniqueWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => [ScheduleUpdateManyWithWhereWithoutRestaurantInput], {
    nullable: true
  })
  updateMany?: ScheduleUpdateManyWithWhereWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => [ScheduleScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ScheduleScalarWhereInput[] | undefined;
}
