import { extendType, objectType } from "nexus";

export const Offer = objectType({
  name: "Offer",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.description();
    t.model.image();
    t.model.startDate();
    t.model.endDate();
    t.model.isActive();
    t.model.restaurant();
    t.model.orders();
    t.model.updatedAt();
    t.model.createdAt();
  },
});

export const OfferQuery = extendType({
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

export const OfferMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOneOffer({ alias: "createOffer" });
    t.crud.updateOneOffer({ alias: "updateOffer" });
    t.crud.deleteOneOffer({ alias: "deleteOffer" });
  },
});
