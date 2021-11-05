"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CMSReservationMutation = exports.CMSReservationQuery = exports.CMSReservation = void 0;
const nexus_1 = require("nexus");
const nexus_shield_1 = require("nexus-shield");
const isAuthenticated_1 = require("../../rules/isAuthenticated");
exports.CMSReservation = (0, nexus_1.objectType)({
    name: "CMSReservation",
    definition(t) {
        t.model.id();
        t.model.headerHeading();
        t.model.headerDescription();
        t.model.headerImage();
        t.model.isActive();
        t.model.restaurant();
    },
});
exports.CMSReservationQuery = (0, nexus_1.extendType)({
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
exports.CMSReservationMutation = (0, nexus_1.extendType)({
    type: "Mutation",
    definition(t) {
        t.crud.createOneCMSReservation({
            shield: (0, nexus_shield_1.or)((0, isAuthenticated_1.isAdmin)(), (0, isAuthenticated_1.isOwner)(), (0, isAuthenticated_1.isManager)()),
            alias: "createCMSReservation",
        });
        t.crud.updateOneCMSReservation({
            shield: (0, nexus_shield_1.or)((0, isAuthenticated_1.isAdmin)(), (0, isAuthenticated_1.isOwner)(), (0, isAuthenticated_1.isManager)()),
            alias: "updateCMSReservation",
        });
        t.crud.deleteOneCMSReservation({
            shield: (0, nexus_shield_1.or)((0, isAuthenticated_1.isAdmin)(), (0, isAuthenticated_1.isOwner)(), (0, isAuthenticated_1.isManager)()),
            alias: "deleteCMSReservation",
        });
    },
});
//# sourceMappingURL=CMSReservation.js.map