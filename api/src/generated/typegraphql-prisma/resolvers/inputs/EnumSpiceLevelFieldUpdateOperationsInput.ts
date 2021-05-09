import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SpiceLevel } from "../../enums/SpiceLevel";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumSpiceLevelFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => SpiceLevel, {
    nullable: true
  })
  set?: "None" | "Mild" | "Medium" | "Hot" | "ExtraHot" | undefined;
}
