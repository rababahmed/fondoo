import { extendType, objectType } from "nexus";
import { or } from "nexus-shield";
import { isAdmin, isManager, isOwner } from "../../rules/isAuthenticated";

export const Domain = objectType({
  name: "Domain",
  definition(t) {
    t.model.id();
    t.model.domain();
    t.model.restaurantConfig();
    t.model.createdAt();
    t.model.updatedAt();
  },
});

export const DomainQuery = extendType({
  type: "Query",
  definition(t) {
    t.crud.domain();
    t.crud.domains({
      filtering: true,
      ordering: true,
      pagination: true,
      shield: or(isAdmin()),
    });
  },
});

export const DomainMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOneDomain({
      alias: "createDomain",
      shield: or(isAdmin()),
    });
    t.crud.updateOneDomain({
      alias: "updateDomain",
      shield: or(isAdmin(), isOwner(), isManager()),
    });
    t.crud.deleteOneDomain({
      alias: "deleteDomain",
      shield: or(isAdmin()),
    });
  },
});
