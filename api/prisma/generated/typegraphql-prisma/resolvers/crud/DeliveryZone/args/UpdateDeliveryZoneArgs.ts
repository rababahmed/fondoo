import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeliveryZoneUpdateInput } from "../../../inputs/DeliveryZoneUpdateInput";
import { DeliveryZoneWhereUniqueInput } from "../../../inputs/DeliveryZoneWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateDeliveryZoneArgs {
  @TypeGraphQL.Field(_type => DeliveryZoneUpdateInput, {
    nullable: false
  })
  data!: DeliveryZoneUpdateInput;

  @TypeGraphQL.Field(_type => DeliveryZoneWhereUniqueInput, {
    nullable: false
  })
  where!: DeliveryZoneWhereUniqueInput;
}
