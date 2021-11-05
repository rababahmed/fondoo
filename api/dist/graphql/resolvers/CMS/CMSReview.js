"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CMSReviewMutation = exports.CMSReviewQuery = exports.CMSReview = void 0;
const nexus_1 = require("nexus");
const nexus_shield_1 = require("nexus-shield");
const isAuthenticated_1 = require("../../rules/isAuthenticated");
exports.CMSReview = (0, nexus_1.objectType)({
    name: "CMSReview",
    definition(t) {
        t.model.id();
        t.model.headerHeading();
        t.model.headerDescription();
        t.model.headerImage();
        t.model.isActive();
        t.model.restaurant();
    },
});
exports.CMSReviewQuery = (0, nexus_1.extendType)({
    type: "Query",
    definition(t) {
        t.crud.cmsReview();
        t.crud.cmsReviews({
            filtering: true,
            ordering: true,
            pagination: true,
        });
    },
});
exports.CMSReviewMutation = (0, nexus_1.extendType)({
    type: "Mutation",
    definition(t) {
        t.crud.createOneCMSReview({
            shield: (0, nexus_shield_1.or)((0, isAuthenticated_1.isAdmin)(), (0, isAuthenticated_1.isOwner)(), (0, isAuthenticated_1.isManager)()),
            alias: "createCMSReview",
        });
        t.crud.updateOneCMSReview({
            shield: (0, nexus_shield_1.or)((0, isAuthenticated_1.isAdmin)(), (0, isAuthenticated_1.isOwner)(), (0, isAuthenticated_1.isManager)()),
            alias: "updateCMSReview",
        });
        t.crud.deleteOneCMSReview({
            shield: (0, nexus_shield_1.or)((0, isAuthenticated_1.isAdmin)(), (0, isAuthenticated_1.isOwner)(), (0, isAuthenticated_1.isManager)()),
            alias: "deleteCMSReview",
        });
    },
});
//# sourceMappingURL=CMSReview.js.map