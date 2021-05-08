import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeliveryZoneScalarWhereInput } from "../inputs/DeliveryZoneScalarWhereInput";
import { DeliveryZoneUpdateManyMutationInput } from "../inputs/DeliveryZoneUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DeliveryZoneUpdateManyWithWhereWithoutRestaurantInput {
  @TypeGraphQL.Field(_type => DeliveryZoneScalarWhereInput, {
    nullable: false
  })
  where!: DeliveryZoneScalarWhereInput;

  @TypeGraphQL.Field(_type => DeliveryZoneUpdateManyMutationInput, {
    nullable: false
  })
  data!: DeliveryZoneUpdateManyMutationInput;
}
