import { extendType, objectType } from "nexus";
import { or } from "nexus-shield";
import { isAdmin, isManager, isOwner } from "../../rules/isAuthenticated";

export const CMSHome = objectType({
  name: "CMSHome",
  definition(t) {
    t.model.id();
    t.model.heroHeading();
    t.model.heroDescription();
    t.model.heroImage();
    t.model.aboutHeading();
    t.model.aboutDescription();
    t.model.aboutImage();
    t.model.dealsHeading();
    t.model.dealsDescription();
    t.model.dealsImage();
    t.model.reservationHeading();
    t.model.reservationDescription();
    t.model.reservationImage();
    t.model.popularDishesHeading();
    t.model.popularDishesDescription();
    t.model.popularDishesImage();
    t.model.restaurant();
  },
});

export const CMSHomeQuery = extendType({
  type: "Query",
  definition(t) {
    t.crud.cmsHome();
    t.crud.cmsHomes({
      filtering: true,
      ordering: true,
      pagination: true,
      shield: or(isAdmin(), isOwner(), isManager()),
    });
  },
});

export const CMSHomeMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOneCMSHome({
      alias: "createCMSHome",
      shield: or(isAdmin(), isOwner(), isManager()),
    });
    t.crud.updateOneCMSHome({
      alias: "updateCMSHome",
      shield: or(isAdmin(), isOwner(), isManager()),
    });
    t.crud.deleteOneCMSHome({
      alias: "deleteCMSHome",
      shield: or(isAdmin(), isOwner(), isManager()),
    });
  },
});

export * as CMSAbout from "./CMSAbout";
export * as CMSReview from "./CMSReview";
export * as CMSReservation from "./CMSReservation";
export * as CMSContact from "./CMSContact";
