"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CMSContactMutation = exports.CMSContactQuery = exports.CMSContact = void 0;
const nexus_1 = require("nexus");
const nexus_shield_1 = require("nexus-shield");
const isAuthenticated_1 = require("../../rules/isAuthenticated");
exports.CMSContact = (0, nexus_1.objectType)({
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
exports.CMSContactQuery = (0, nexus_1.extendType)({
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
exports.CMSContactMutation = (0, nexus_1.extendType)({
    type: "Mutation",
    definition(t) {
        t.crud.createOneCMSContact({
            shield: (0, nexus_shield_1.or)((0, isAuthenticated_1.isAdmin)(), (0, isAuthenticated_1.isOwner)(), (0, isAuthenticated_1.isManager)()),
            alias: "createCMSContact",
        });
        t.crud.updateOneCMSContact({
            shield: (0, nexus_shield_1.or)((0, isAuthenticated_1.isAdmin)(), (0, isAuthenticated_1.isOwner)(), (0, isAuthenticated_1.isManager)()),
            alias: "updateCMSContact",
        });
        t.crud.deleteOneCMSContact({
            shield: (0, nexus_shield_1.or)((0, isAuthenticated_1.isAdmin)(), (0, isAuthenticated_1.isOwner)(), (0, isAuthenticated_1.isManager)()),
            alias: "deleteCMSContact",
        });
    },
});
//# sourceMappingURL=CMSContact.js.map