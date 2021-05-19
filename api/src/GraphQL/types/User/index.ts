import { extendType, objectType } from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.model.id();
    t.model.firstName();
    t.model.lastName();
    t.model.email();
    t.model.phone();
    t.model.role();
    t.model.restaurants();
    t.model.token();
  },
});

export const UserQuery = extendType({
  type: "Query",
  definition(t) {
    t.crud.user();
    t.crud.users();
  },
});

export const UserMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOneUser({ alias: "createUser" });
    t.crud.updateOneUser({ alias: "updateUser" });
    t.crud.deleteOneUser({ alias: "deleteUser" });
  },
});

export * as UserToken from "./token";
