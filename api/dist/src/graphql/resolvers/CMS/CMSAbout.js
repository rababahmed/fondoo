"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CMSAboutMutation = exports.CMSAboutQuery = exports.CMSAbout = void 0;
const nexus_1 = require("nexus");
const nexus_shield_1 = require("nexus-shield");
const isAuthenticated_1 = require("../../rules/isAuthenticated");
exports.CMSAbout = (0, nexus_1.objectType)({
    name: "CMSAbout",
    definition(t) {
        t.model.id();
        t.model.headerHeading();
        t.model.headerDescription();
        t.model.headerImage();
        t.model.storyHeading();
        t.model.storyDescription();
        t.model.storyImage();
        t.model.isActive();
        t.model.restaurant();
    },
});
exports.CMSAboutQuery = (0, nexus_1.extendType)({
    type: "Query",
    definition(t) {
        t.crud.cmsAbout();
        t.crud.cmsAbouts({
            filtering: true,
            ordering: true,
            pagination: true,
        });
    },
});
exports.CMSAboutMutation = (0, nexus_1.extendType)({
    type: "Mutation",
    definition(t) {
        t.crud.createOneCMSAbout({
            shield: (0, nexus_shield_1.or)((0, isAuthenticated_1.isAdmin)(), (0, isAuthenticated_1.isOwner)(), (0, isAuthenticated_1.isManager)()),
            alias: "createCMSAbout",
        });
        t.crud.updateOneCMSAbout({
            shield: (0, nexus_shield_1.or)((0, isAuthenticated_1.isAdmin)(), (0, isAuthenticated_1.isOwner)(), (0, isAuthenticated_1.isManager)()),
            alias: "updateCMSAbout",
        });
        t.crud.deleteOneCMSAbout({
            shield: (0, nexus_shield_1.or)((0, isAuthenticated_1.isAdmin)(), (0, isAuthenticated_1.isOwner)(), (0, isAuthenticated_1.isManager)()),
            alias: "deleteCMSAbout",
        });
    },
});
//# sourceMappingURL=CMSAbout.js.map