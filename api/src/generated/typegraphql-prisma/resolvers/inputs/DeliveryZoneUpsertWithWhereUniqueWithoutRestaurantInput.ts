import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeliveryZoneCreateWithoutRestaurantInput } from "../inputs/DeliveryZoneCreateWithoutRestaurantInput";
import { DeliveryZoneUpdateWithoutRestaurantInput } from "../inputs/DeliveryZoneUpdateWithoutRestaurantInput";
import { DeliveryZoneWhereUniqueInput } from "../inputs/DeliveryZoneWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DeliveryZoneUpsertWithWhereUniqueWithoutRestaurantInput {
  @TypeGraphQL.Field(_type => DeliveryZoneWhereUniqueInput, {
    nullable: false
  })
  where!: DeliveryZoneWhereUniqueInput;

  @TypeGraphQL.Field(_type => DeliveryZoneUpdateWithoutRestaurantInput, {
    nullable: false
  })
  update!: DeliveryZoneUpdateWithoutRestaurantInput;

  @TypeGraphQL.Field(_type => DeliveryZoneCreateWithoutRestaurantInput, {
    nullable: false
  })
  create!: DeliveryZoneCreateWithoutRestaurantInput;
}
