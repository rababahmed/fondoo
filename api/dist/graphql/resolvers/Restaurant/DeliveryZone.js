"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryZoneMutation = exports.DeliveryZoneQuery = exports.DeliveryZone = void 0;
const nexus_1 = require("nexus");
const nexus_shield_1 = require("nexus-shield");
const isAuthenticated_1 = require("../../rules/isAuthenticated");
exports.DeliveryZone = nexus_1.objectType({
    name: "DeliveryZone",
    definition(t) {
        t.model.id();
        t.model.name();
        t.model.postCode();
        t.model.deliveryFeeType();
        t.model.deliveryCharge();
        t.model.minDeliveryAmount();
        t.model.minDeliveryRadius();
        t.model.maxDeliveryRadius();
        t.model.restaurant();
        t.model.restaurantId();
    },
});
exports.DeliveryZoneQuery = nexus_1.extendType({
    type: "Query",
    definition(t) {
        t.crud.deliveryZone();
        t.crud.deliveryZones({
            filtering: true,
            ordering: true,
            pagination: true,
        });
    },
});
exports.DeliveryZoneMutation = nexus_1.extendType({
    type: "Mutation",
    definition(t) {
        t.crud.createOneDeliveryZone({
            shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()),
            alias: "createDeliveryZone",
        });
        t.crud.updateOneDeliveryZone({
            shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()),
            alias: "updateDeliveryZone",
        });
        t.crud.deleteOneDeliveryZone({
            shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()),
            alias: "deleteDeliveryZone",
        });
    },
});
//# sourceMappingURL=DeliveryZone.js.map