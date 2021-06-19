"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleMutation = exports.ScheduleQuery = exports.Schedule = void 0;
const nexus_1 = require("nexus");
const nexus_shield_1 = require("nexus-shield");
const isAuthenticated_1 = require("../../rules/isAuthenticated");
exports.Schedule = nexus_1.objectType({
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
exports.ScheduleQuery = nexus_1.extendType({
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
exports.ScheduleMutation = nexus_1.extendType({
    type: "Mutation",
    definition(t) {
        t.crud.createOneSchedule({
            shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()),
            alias: "createSchedule",
        });
        t.crud.updateOneSchedule({
            shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()),
            alias: "updateSchedule",
        });
        t.crud.deleteOneSchedule({
            shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()),
            alias: "deleteSchedule",
        });
    },
});
//# sourceMappingURL=schedule.js.map