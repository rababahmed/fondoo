import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeliveryFee } from "../../enums/DeliveryFee";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumDeliveryFeeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => DeliveryFee, {
    nullable: true
  })
  set?: "Fixed" | "Percent" | undefined;
}
