import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumSpiceLevelFilter } from "../inputs/NestedEnumSpiceLevelFilter";
import { SpiceLevel } from "../../enums/SpiceLevel";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumSpiceLevelFilter {
  @TypeGraphQL.Field(_type => SpiceLevel, {
    nullable: true
  })
  equals?: "None" | "Mild" | "Medium" | "Hot" | "ExtraHot" | undefined;

  @TypeGraphQL.Field(_type => [SpiceLevel], {
    nullable: true
  })
  in?: Array<"None" | "Mild" | "Medium" | "Hot" | "ExtraHot"> | undefined;

  @TypeGraphQL.Field(_type => [SpiceLevel], {
    nullable: true
  })
  notIn?: Array<"None" | "Mild" | "Medium" | "Hot" | "ExtraHot"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumSpiceLevelFilter, {
    nullable: true
  })
  not?: NestedEnumSpiceLevelFilter | undefined;
}
