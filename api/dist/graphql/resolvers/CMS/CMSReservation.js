"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CMSReservationMutation = exports.CMSReservationQuery = exports.CMSReservation = void 0;
const nexus_1 = require("nexus");
const nexus_shield_1 = require("nexus-shield");
const isAuthenticated_1 = require("../../rules/isAuthenticated");
exports.CMSReservation = nexus_1.objectType({
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
exports.CMSReservationQuery = nexus_1.extendType({
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
exports.CMSReservationMutation = nexus_1.extendType({
    type: "Mutation",
    definition(t) {
        t.crud.createOneCMSReservation({
            shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()),
            alias: "createCMSReservation",
        });
        t.crud.updateOneCMSReservation({
            shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()),
            alias: "updateCMSReservation",
        });
        t.crud.deleteOneCMSReservation({
            shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()),
            alias: "deleteCMSReservation",
        });
    },
});
//# sourceMappingURL=CMSReservation.js.map