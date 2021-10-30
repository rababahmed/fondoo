"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryZoneMutation = exports.DeliveryZoneQuery = exports.DeliveryZone = void 0;
const nexus_1 = require("nexus");
const nexus_shield_1 = require("nexus-shield");
const isAuthenticated_1 = require("../../rules/isAuthenticated");
exports.DeliveryZone = (0, nexus_1.objectType)({
    name: "DeliveryZone",
    definition(t) {
        t.model.id();
        t.model.name();
        t.model.deliveryTime();
        t.model.isPreOrder();
        t.model.preOrderInstructions();
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
exports.DeliveryZoneQuery = (0, nexus_1.extendType)({
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
exports.DeliveryZoneMutation = (0, nexus_1.extendType)({
    type: "Mutation",
    definition(t) {
        t.crud.createOneDeliveryZone({
            shield: (0, nexus_shield_1.or)((0, isAuthenticated_1.isAdmin)(), (0, isAuthenticated_1.isOwner)(), (0, isAuthenticated_1.isManager)()),
            alias: "createDeliveryZone",
        });
        t.crud.updateOneDeliveryZone({
            shield: (0, nexus_shield_1.or)((0, isAuthenticated_1.isAdmin)(), (0, isAuthenticated_1.isOwner)(), (0, isAuthenticated_1.isManager)()),
            alias: "updateDeliveryZone",
        });
        t.crud.deleteOneDeliveryZone({
            shield: (0, nexus_shield_1.or)((0, isAuthenticated_1.isAdmin)(), (0, isAuthenticated_1.isOwner)(), (0, isAuthenticated_1.isManager)()),
            alias: "deleteDeliveryZone",
        });
    },
});
//# sourceMappingURL=DeliveryZone.js.map