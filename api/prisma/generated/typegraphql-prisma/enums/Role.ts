import * as TypeGraphQL from "type-graphql";

export enum Role {
  Waiter = "Waiter",
  Cashier = "Cashier",
  Manager = "Manager",
  Owner = "Owner",
  Admin = "Admin",
  SuperAdmin = "SuperAdmin"
}
TypeGraphQL.registerEnumType(Role, {
  name: "Role",
  description: undefined,
});
