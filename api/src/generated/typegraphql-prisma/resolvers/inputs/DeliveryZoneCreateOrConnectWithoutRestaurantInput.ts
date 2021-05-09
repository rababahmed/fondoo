import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeliveryZoneCreateWithoutRestaurantInput } from "../inputs/DeliveryZoneCreateWithoutRestaurantInput";
import { DeliveryZoneWhereUniqueInput } from "../inputs/DeliveryZoneWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DeliveryZoneCreateOrConnectWithoutRestaurantInput {
  @TypeGraphQL.Field(_type => DeliveryZoneWhereUniqueInput, {
    nullable: false
  })
  where!: DeliveryZoneWhereUniqueInput;

  @TypeGraphQL.Field(_type => DeliveryZoneCreateWithoutRestaurantInput, {
    nullable: false
  })
  create!: DeliveryZoneCreateWithoutRestaurantInput;
}
