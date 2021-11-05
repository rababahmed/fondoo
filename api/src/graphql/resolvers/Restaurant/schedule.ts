import { extendType, objectType } from "nexus";
import { or } from "nexus-shield";
import { isAdmin, isManager, isOwner } from "../../rules/isAuthenticated";

export const Schedule = objectType({
  name: "Schedule",
  definition(t) {
    t.model.id();
    t.model.day();
    t.model.openingTime();
    t.model.closingTime();
    t.model.pickupTime();
    t.model.restaurant();
    t.model.restaurantId();
  },
});

export const ScheduleQuery = extendType({
  type: "Query",
  definition(t) {
    t.crud.schedule();
    t.crud.schedules({
      filtering: true,
      ordering: true,
      pagination: true,
    });
  },
});

export const ScheduleMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOneSchedule({
      shield: or(isAdmin(), isOwner(), isManager()),
      alias: "createSchedule",
    });
    t.crud.updateOneSchedule({
      shield: or(isAdmin(), isOwner(), isManager()),
      alias: "updateSchedule",
    });
    t.crud.deleteOneSchedule({
      shield: or(isAdmin(), isOwner(), isManager()),
      alias: "deleteSchedule",
    });
  },
});
