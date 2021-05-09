import * as TypeGraphQL from "type-graphql";

export enum SpiceLevel {
  None = "None",
  Mild = "Mild",
  Medium = "Medium",
  Hot = "Hot",
  ExtraHot = "ExtraHot"
}
TypeGraphQL.registerEnumType(SpiceLevel, {
  name: "SpiceLevel",
  description: undefined,
});
