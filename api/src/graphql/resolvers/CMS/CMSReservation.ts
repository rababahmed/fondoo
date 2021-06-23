import { extendType, objectType } from "nexus";
import { or } from "nexus-shield";
import { isAdmin, isManager, isOwner } from "../../rules/isAuthenticated";

export const CMSReservation = objectType({
  name: "CMSReservation",
  definition(t) {
    t.model.id();
    t.model.headerHeading();
    t.model.headerDescription();
    t.model.headerImage();
    t.model.isActive();
    t.model.Restaurant();
  },
});

export const CMSReservationQuery = extendType({
  type: "Query",
  definition(t) {
    t.crud.cmsReservation();
    t.crud.cmsReservations({
      filtering: true,
      ordering: true,
      pagination: true,
    });
  },
});

export const CMSReservationMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOneCMSReservation({
      shield: or(isAdmin(), isOwner(), isManager()),
      alias: "createCMSReservation",
    });
    t.crud.updateOneCMSReservation({
      shield: or(isAdmin(), isOwner(), isManager()),
      alias: "updateCMSReservation",
    });
    t.crud.deleteOneCMSReservation({
      shield: or(isAdmin(), isOwner(), isManager()),
      alias: "deleteCMSReservation",
    });
  },
});
