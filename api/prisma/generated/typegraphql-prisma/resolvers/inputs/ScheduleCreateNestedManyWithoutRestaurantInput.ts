import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ScheduleCreateManyRestaurantInputEnvelope } from "../inputs/ScheduleCreateManyRestaurantInputEnvelope";
import { ScheduleCreateOrConnectWithoutRestaurantInput } from "../inputs/ScheduleCreateOrConnectWithoutRestaurantInput";
import { ScheduleCreateWithoutRestaurantInput } from "../inputs/ScheduleCreateWithoutRestaurantInput";
import { ScheduleWhereUniqueInput } from "../inputs/ScheduleWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ScheduleCreateNestedManyWithoutRestaurantInput {
  @TypeGraphQL.Field(_type => [ScheduleCreateWithoutRestaurantInput], {
    nullable: true
  })
  create?: ScheduleCreateWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => [ScheduleCreateOrConnectWithoutRestaurantInput], {
    nullable: true
  })
  connectOrCreate?: ScheduleCreateOrConnectWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => ScheduleCreateManyRestaurantInputEnvelope, {
    nullable: true
  })
  createMany?: ScheduleCreateManyRestaurantInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ScheduleWhereUniqueInput], {
    nullable: true
  })
  connect?: ScheduleWhereUniqueInput[] | undefined;
}
