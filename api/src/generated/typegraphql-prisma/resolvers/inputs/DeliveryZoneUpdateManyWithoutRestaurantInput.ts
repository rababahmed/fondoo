import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeliveryZoneCreateManyRestaurantInputEnvelope } from "../inputs/DeliveryZoneCreateManyRestaurantInputEnvelope";
import { DeliveryZoneCreateOrConnectWithoutRestaurantInput } from "../inputs/DeliveryZoneCreateOrConnectWithoutRestaurantInput";
import { DeliveryZoneCreateWithoutRestaurantInput } from "../inputs/DeliveryZoneCreateWithoutRestaurantInput";
import { DeliveryZoneScalarWhereInput } from "../inputs/DeliveryZoneScalarWhereInput";
import { DeliveryZoneUpdateManyWithWhereWithoutRestaurantInput } from "../inputs/DeliveryZoneUpdateManyWithWhereWithoutRestaurantInput";
import { DeliveryZoneUpdateWithWhereUniqueWithoutRestaurantInput } from "../inputs/DeliveryZoneUpdateWithWhereUniqueWithoutRestaurantInput";
import { DeliveryZoneUpsertWithWhereUniqueWithoutRestaurantInput } from "../inputs/DeliveryZoneUpsertWithWhereUniqueWithoutRestaurantInput";
import { DeliveryZoneWhereUniqueInput } from "../inputs/DeliveryZoneWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DeliveryZoneUpdateManyWithoutRestaurantInput {
  @TypeGraphQL.Field(_type => [DeliveryZoneCreateWithoutRestaurantInput], {
    nullable: true
  })
  create?: DeliveryZoneCreateWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeliveryZoneCreateOrConnectWithoutRestaurantInput], {
    nullable: true
  })
  connectOrCreate?: DeliveryZoneCreateOrConnectWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeliveryZoneUpsertWithWhereUniqueWithoutRestaurantInput], {
    nullable: true
  })
  upsert?: DeliveryZoneUpsertWithWhereUniqueWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => DeliveryZoneCreateManyRestaurantInputEnvelope, {
    nullable: true
  })
  createMany?: DeliveryZoneCreateManyRestaurantInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [DeliveryZoneWhereUniqueInput], {
    nullable: true
  })
  connect?: DeliveryZoneWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeliveryZoneWhereUniqueInput], {
    nullable: true
  })
  set?: DeliveryZoneWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeliveryZoneWhereUniqueInput], {
    nullable: true
  })
  disconnect?: DeliveryZoneWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeliveryZoneWhereUniqueInput], {
    nullable: true
  })
  delete?: DeliveryZoneWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeliveryZoneUpdateWithWhereUniqueWithoutRestaurantInput], {
    nullable: true
  })
  update?: DeliveryZoneUpdateWithWhereUniqueWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeliveryZoneUpdateManyWithWhereWithoutRestaurantInput], {
    nullable: true
  })
  updateMany?: DeliveryZoneUpdateManyWithWhereWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeliveryZoneScalarWhereInput], {
    nullable: true
  })
  deleteMany?: DeliveryZoneScalarWhereInput[] | undefined;
}
