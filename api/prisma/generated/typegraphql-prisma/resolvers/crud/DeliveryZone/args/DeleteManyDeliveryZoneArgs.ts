import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeliveryZoneWhereInput } from "../../../inputs/DeliveryZoneWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyDeliveryZoneArgs {
  @TypeGraphQL.Field(_type => DeliveryZoneWhereInput, {
    nullable: true
  })
  where?: DeliveryZoneWhereInput | undefined;
}
