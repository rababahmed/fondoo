import { extendType, objectType } from "nexus";
import { or } from "nexus-shield";
import { isAdmin, isManager, isOwner } from "../../rules/isAuthenticated";

export const CMSReview = objectType({
  name: "CMSReview",
  definition(t) {
    t.model.id();
    t.model.headerHeading();
    t.model.headerDescription();
    t.model.headerImage();
    t.model.isActive();
    t.model.Restaurant();
  },
});

export const CMSReviewQuery = extendType({
  type: "Query",
  definition(t) {
    t.crud.cmsReview();
    t.crud.cmsReviews({
      filtering: true,
      ordering: true,
      pagination: true,
    });
  },
});

export const CMSReviewMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOneCMSReview({
      shield: or(isAdmin(), isOwner(), isManager()),
      alias: "createCMSReview",
    });
    t.crud.updateOneCMSReview({
      shield: or(isAdmin(), isOwner(), isManager()),
      alias: "updateCMSReview",
    });
    t.crud.deleteOneCMSReview({
      shield: or(isAdmin(), isOwner(), isManager()),
      alias: "deleteCMSReview",
    });
  },
});
