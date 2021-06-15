import { extendType, objectType } from "nexus";
import { or } from "nexus-shield";
import { isAdmin, isManager, isOwner } from "../../rules/isAuthenticated";

export const CMSAbout = objectType({
  name: "CMSAbout",
  definition(t) {
    t.model.id();
    t.model.headerHeading();
    t.model.headerDescription();
    t.model.headerImage();
    t.model.storyHeading();
    t.model.storyDescription();
    t.model.storyImage();
    t.model.isActive();
    t.model.restaurant();
  },
});

export const CMSAboutQuery = extendType({
  type: "Query",
  definition(t) {
    t.crud.cmsAbout();
    t.crud.cmsAbouts({
      filtering: true,
      ordering: true,
      pagination: true,
    });
  },
});

export const CMSAboutMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOneCMSAbout({
      shield: or(isAdmin(), isOwner(), isManager()),
      alias: "createCMSAbout",
    });
    t.crud.updateOneCMSAbout({
      shield: or(isAdmin(), isOwner(), isManager()),
      alias: "updateCMSAbout",
    });
    t.crud.deleteOneCMSAbout({
      shield: or(isAdmin(), isOwner(), isManager()),
      alias: "deleteCMSAbout",
    });
  },
});
