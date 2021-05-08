import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateroleInput {
  @TypeGraphQL.Field(_type => [Role], {
    nullable: true
  })
  set?: Array<"Waiter" | "Cashier" | "Manager" | "Owner" | "Admin" | "SuperAdmin"> | undefined;

  @TypeGraphQL.Field(_type => [Role], {
    nullable: true
  })
  push?: Array<"Waiter" | "Cashier" | "Manager" | "Owner" | "Admin" | "SuperAdmin"> | undefined;
}
