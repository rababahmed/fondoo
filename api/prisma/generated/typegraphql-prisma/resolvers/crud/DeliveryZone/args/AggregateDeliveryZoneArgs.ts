import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeliveryZoneOrderByInput } from "../../../inputs/DeliveryZoneOrderByInput";
import { DeliveryZoneWhereInput } from "../../../inputs/DeliveryZoneWhereInput";
import { DeliveryZoneWhereUniqueInput } from "../../../inputs/DeliveryZoneWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateDeliveryZoneArgs {
  @TypeGraphQL.Field(_type => DeliveryZoneWhereInput, {
    nullable: true
  })
  where?: DeliveryZoneWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DeliveryZoneOrderByInput], {
    nullable: true
  })
  orderBy?: DeliveryZoneOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => DeliveryZoneWhereUniqueInput, {
    nullable: true
  })
  cursor?: DeliveryZoneWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
