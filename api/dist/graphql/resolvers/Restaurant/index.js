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
exports.RestaurantReview = exports.RestaurantSocial = exports.RestaurantConfig = exports.Schedule = exports.RestaurantPlan = exports.DeliveryZone = exports.RestaurantMutation = exports.RestaurantQuery = exports.Restaurant = void 0;
const nexus_1 = require("nexus");
const nexus_shield_1 = require("nexus-shield");
const isAuthenticated_1 = require("../../rules/isAuthenticated");
exports.Restaurant = nexus_1.objectType({
    name: "Restaurant",
    definition(t) {
        t.model.id();
        t.model.name();
        t.model.email();
        t.model.businessPhone();
        t.model.reservationPhone();
        t.model.url();
        t.model.logo();
        t.model.coverImage();
        t.model.cuisine();
        t.model.address();
        t.model.city();
        t.model.postCode();
        t.model.country();
        t.model.currency();
        t.model.priceRange();
        t.model.diningStyle();
        t.model.vat();
        t.model.serviceCharge();
        t.model.hasParkingFacilities();
        t.model.hasPartyFacilities();
        t.model.hasKidsZone();
        t.model.isTakeaway();
        t.model.isDelivery();
        t.model.isReservation();
        t.model.isAutoAcceptOrder();
        t.model.isAutoAcceptReservation();
        t.model.schedules();
        t.model.deliveryZones();
        t.model.customers({ shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()) });
        t.model.orders({ shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()) });
        t.model.orderItems({ shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()) });
        t.model.productCategory();
        t.model.products();
        t.model.plan({ shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()) });
        t.model.restaurantPlanId({ shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()) });
        t.model.users({ shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()) });
        t.model.config();
        t.model.socials();
        t.model.CMSHome();
        t.model.CMSAbout();
        t.model.CMSReview();
        t.model.CMSReservation();
        t.model.CMSContact();
        t.model.config({ shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()) });
        t.model.config({ shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()) });
        t.model.config({ shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()) });
        t.model.createdAt();
    },
});
exports.RestaurantQuery = nexus_1.extendType({
    type: "Query",
    definition(t) {
        t.crud.restaurant();
        t.crud.restaurants({
            filtering: true,
            ordering: true,
            pagination: true,
            shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()),
        });
    },
});
exports.RestaurantMutation = nexus_1.extendType({
    type: "Mutation",
    definition(t) {
        t.crud.createOneRestaurant({
            alias: "createRestaurant",
            shield: nexus_shield_1.or(isAuthenticated_1.isAdmin()),
        });
        t.crud.updateOneRestaurant({
            alias: "updateRestaurant",
            shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()),
        });
        t.crud.deleteOneRestaurant({
            alias: "deleteRestaurant",
            shield: nexus_shield_1.or(isAuthenticated_1.isAdmin()),
        });
    },
});
exports.DeliveryZone = __importStar(require("./DeliveryZone"));
exports.RestaurantPlan = __importStar(require("./RestaurantPlan"));
exports.Schedule = __importStar(require("./schedule"));
exports.RestaurantConfig = __importStar(require("./RestaurantConfig"));
exports.RestaurantSocial = __importStar(require("./RestaurantSocial"));
exports.RestaurantReview = __importStar(require("./RestaurantReview"));
//# sourceMappingURL=index.js.map