import { extendType, objectType } from "nexus";

export const Schedule = objectType({
  name: "Schedule",
  definition(t) {
    t.model.id();
    t.model.day();
    t.model.openingTime();
    t.model.closingTime();
    t.model.deliveryTime();
    t.model.takeawayTime();
    t.model.Restaurant();
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
    t.crud.createOneSchedule({ alias: "createSchedule" });
    t.crud.updateOneSchedule({ alias: "updateSchedule" });
    t.crud.deleteOneSchedule({ alias: "deleteSchedule" });
  },
});
