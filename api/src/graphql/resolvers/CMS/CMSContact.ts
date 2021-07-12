import { extendType, objectType } from "nexus";
import { or } from "nexus-shield";
import { isAdmin, isManager, isOwner } from "../../rules/isAuthenticated";

export const CMSContact = objectType({
  name: "CMSContact",
  definition(t) {
    t.model.id();
    t.model.headerHeading();
    t.model.headerDescription();
    t.model.headerImage();
    t.model.isActive();
    t.model.restaurant();
  },
});

export const CMSContactQuery = extendType({
  type: "Query",
  definition(t) {
    t.crud.cmsContact();
    t.crud.cmsContacts({
      filtering: true,
      ordering: true,
      pagination: true,
    });
  },
});

export const CMSContactMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOneCMSContact({
      shield: or(isAdmin(), isOwner(), isManager()),
      alias: "createCMSContact",
    });
    t.crud.updateOneCMSContact({
      shield: or(isAdmin(), isOwner(), isManager()),
      alias: "updateCMSContact",
    });
    t.crud.deleteOneCMSContact({
      shield: or(isAdmin(), isOwner(), isManager()),
      alias: "deleteCMSContact",
    });
  },
});
