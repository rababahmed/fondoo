import { extendType, objectType } from "nexus";

export const DeliveryZone = objectType({
  name: "DeliveryZone",
  definition(t) {
    t.model.id();
    t.model.zoneTitle();
    t.model.zonePostCode();
    t.model.deliveryFeeType();
    t.model.deliveryCharge();
    t.model.minDeliveryAmount();
    t.model.minDeliveryRadius();
    t.model.maxDeliveryRadius();
    t.model.Restaurant();
    t.model.restaurantId();
  },
});

export const DeliveryZoneQuery = extendType({
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

export const DeliveryZoneMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOneDeliveryZone({ alias: "createDeliveryZone" });
    t.crud.updateOneDeliveryZone({ alias: "updateDeliveryZone" });
    t.crud.deleteOneDeliveryZone({ alias: "deleteDeliveryZone" });
  },
});
