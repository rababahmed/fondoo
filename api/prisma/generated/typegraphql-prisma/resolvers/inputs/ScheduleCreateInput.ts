import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RestaurantCreateNestedOneWithoutScheduleInput } from "../inputs/RestaurantCreateNestedOneWithoutScheduleInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ScheduleCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  openingTime?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  closingTime?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  minDeliveryAmount?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  deliveryTime?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  takeawayTime?: string | undefined;

  @TypeGraphQL.Field(_type => RestaurantCreateNestedOneWithoutScheduleInput, {
    nullable: true
  })
  Restaurant?: RestaurantCreateNestedOneWithoutScheduleInput | undefined;
}
