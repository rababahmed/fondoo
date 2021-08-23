"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferMutation = exports.OfferQuery = exports.Offer = void 0;
const nexus_1 = require("nexus");
exports.Offer = nexus_1.objectType({
    name: "Offer",
    definition(t) {
        t.model.id();
        t.model.name();
        t.model.description();
        t.model.startDate();
        t.model.endDate();
        t.model.isActive();
        t.model.restaurant();
        t.model.orders();
        t.model.updatedAt();
        t.model.createdAt();
    },
});
exports.OfferQuery = nexus_1.extendType({
    type: "Query",
    definition(t) {
        t.crud.offer();
        t.crud.offers({
            filtering: true,
            ordering: true,
            pagination: true,
        });
    },
});
exports.OfferMutation = nexus_1.extendType({
    type: "Mutation",
    definition(t) {
        t.crud.createOneOffer({ alias: "createOffer" });
        t.crud.updateOneOffer({ alias: "updateOffer" });
        t.crud.deleteOneOffer({ alias: "deleteOffer" });
    },
});
//# sourceMappingURL=Offer.js.map