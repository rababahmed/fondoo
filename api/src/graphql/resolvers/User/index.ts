import { extendType, objectType } from "nexus";
import { or } from "nexus-shield";
import { isAdmin, isManager, isOwner } from "../../rules/isAuthenticated";

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
  },
});

export const UserQuery = extendType({
  type: "Query",
  definition(t) {
    t.crud.user();
    t.crud.users({ shield: or(isAdmin(), isOwner(), isManager()) });
  },
});

export const UserMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOneUser({
      shield: or(isAdmin(), isOwner(), isManager()),
      alias: "createUser",
    });
    t.crud.updateOneUser({
      shield: or(isAdmin(), isOwner(), isManager()),
      alias: "updateUser",
    });
    t.crud.deleteOneUser({
      shield: or(isAdmin(), isOwner(), isManager()),
      alias: "deleteUser",
    });
  },
});
