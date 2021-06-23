"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CMSContact = exports.CMSReservation = exports.CMSReview = exports.CMSAbout = exports.CMSHomeMutation = exports.CMSHomeQuery = exports.CMSHome = void 0;
const nexus_1 = require("nexus");
const nexus_shield_1 = require("nexus-shield");
const isAuthenticated_1 = require("../../rules/isAuthenticated");
exports.CMSHome = nexus_1.objectType({
    name: "CMSHome",
    definition(t) {
        t.model.id();
        t.model.heroHeading();
        t.model.heroDescription();
        t.model.heroImage();
        t.model.aboutHeading();
        t.model.aboutDescription();
        t.model.aboutImage();
        t.model.dealsHeading();
        t.model.dealsDescription();
        t.model.dealsImage();
        t.model.reservationHeading();
        t.model.reservationDescription();
        t.model.reservationImage();
        t.model.popularDishesHeading();
        t.model.popularDishesDescription();
        t.model.popularDishesImage();
        t.model.Restaurant();
    },
});
exports.CMSHomeQuery = nexus_1.extendType({
    type: "Query",
    definition(t) {
        t.crud.cmsHome();
        t.crud.cmsHomes({
            filtering: true,
            ordering: true,
            pagination: true,
            shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()),
        });
    },
});
exports.CMSHomeMutation = nexus_1.extendType({
    type: "Mutation",
    definition(t) {
        t.crud.createOneCMSHome({
            alias: "createCMSHome",
            shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()),
        });
        t.crud.updateOneCMSHome({
            alias: "updateCMSHome",
            shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()),
        });
        t.crud.deleteOneCMSHome({
            alias: "deleteCMSHome",
            shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()),
        });
    },
});
exports.CMSAbout = __importStar(require("./CMSAbout"));
exports.CMSReview = __importStar(require("./CMSReview"));
exports.CMSReservation = __importStar(require("./CMSReservation"));
exports.CMSContact = __importStar(require("./CMSContact"));
//# sourceMappingURL=index.js.map