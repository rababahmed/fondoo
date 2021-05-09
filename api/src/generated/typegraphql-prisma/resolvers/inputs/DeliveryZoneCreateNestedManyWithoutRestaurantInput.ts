import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeliveryZoneCreateManyRestaurantInputEnvelope } from "../inputs/DeliveryZoneCreateManyRestaurantInputEnvelope";
import { DeliveryZoneCreateOrConnectWithoutRestaurantInput } from "../inputs/DeliveryZoneCreateOrConnectWithoutRestaurantInput";
import { DeliveryZoneCreateWithoutRestaurantInput } from "../inputs/DeliveryZoneCreateWithoutRestaurantInput";
import { DeliveryZoneWhereUniqueInput } from "../inputs/DeliveryZoneWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DeliveryZoneCreateNestedManyWithoutRestaurantInput {
  @TypeGraphQL.Field(_type => [DeliveryZoneCreateWithoutRestaurantInput], {
    nullable: true
  })
  create?: DeliveryZoneCreateWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeliveryZoneCreateOrConnectWithoutRestaurantInput], {
    nullable: true
  })
  connectOrCreate?: DeliveryZoneCreateOrConnectWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => DeliveryZoneCreateManyRestaurantInputEnvelope, {
    nullable: true
  })
  createMany?: DeliveryZoneCreateManyRestaurantInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [DeliveryZoneWhereUniqueInput], {
    nullable: true
  })
  connect?: DeliveryZoneWhereUniqueInput[] | undefined;
}
