import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeliveryZoneUpdateManyMutationInput } from "../../../inputs/DeliveryZoneUpdateManyMutationInput";
import { DeliveryZoneWhereInput } from "../../../inputs/DeliveryZoneWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDeliveryZoneArgs {
  @TypeGraphQL.Field(_type => DeliveryZoneUpdateManyMutationInput, {
    nullable: false
  })
  data!: DeliveryZoneUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => DeliveryZoneWhereInput, {
    nullable: true
  })
  where?: DeliveryZoneWhereInput | undefined;
}
