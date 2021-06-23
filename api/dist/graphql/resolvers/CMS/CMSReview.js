"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CMSReviewMutation = exports.CMSReviewQuery = exports.CMSReview = void 0;
const nexus_1 = require("nexus");
const nexus_shield_1 = require("nexus-shield");
const isAuthenticated_1 = require("../../rules/isAuthenticated");
exports.CMSReview = nexus_1.objectType({
    name: "CMSReview",
    definition(t) {
        t.model.id();
        t.model.headerHeading();
        t.model.headerDescription();
        t.model.headerImage();
        t.model.isActive();
        t.model.Restaurant();
    },
});
exports.CMSReviewQuery = nexus_1.extendType({
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
exports.CMSReviewMutation = nexus_1.extendType({
    type: "Mutation",
    definition(t) {
        t.crud.createOneCMSReview({
            shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()),
            alias: "createCMSReview",
        });
        t.crud.updateOneCMSReview({
            shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()),
            alias: "updateCMSReview",
        });
        t.crud.deleteOneCMSReview({
            shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()),
            alias: "deleteCMSReview",
        });
    },
});
//# sourceMappingURL=CMSReview.js.map