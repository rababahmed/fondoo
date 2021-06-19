"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CMSContactMutation = exports.CMSContactQuery = exports.CMSContact = void 0;
const nexus_1 = require("nexus");
const nexus_shield_1 = require("nexus-shield");
const isAuthenticated_1 = require("../../rules/isAuthenticated");
exports.CMSContact = nexus_1.objectType({
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
exports.CMSContactQuery = nexus_1.extendType({
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
exports.CMSContactMutation = nexus_1.extendType({
    type: "Mutation",
    definition(t) {
        t.crud.createOneCMSContact({
            shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()),
            alias: "createCMSContact",
        });
        t.crud.updateOneCMSContact({
            shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()),
            alias: "updateCMSContact",
        });
        t.crud.deleteOneCMSContact({
            shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()),
            alias: "deleteCMSContact",
        });
    },
});
//# sourceMappingURL=CMSContact.js.map