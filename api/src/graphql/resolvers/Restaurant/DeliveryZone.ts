import { extendType, objectType } from "nexus";
import { or } from "nexus-shield";
import { isAdmin, isManager, isOwner } from "../../rules/isAuthenticated";

export const DeliveryZone = objectType({
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
    t.crud.createOneDeliveryZone({
      shield: or(isAdmin(), isOwner(), isManager()),
      alias: "createDeliveryZone",
    });
    t.crud.updateOneDeliveryZone({
      shield: or(isAdmin(), isOwner(), isManager()),
      alias: "updateDeliveryZone",
    });
    t.crud.deleteOneDeliveryZone({
      shield: or(isAdmin(), isOwner(), isManager()),
      alias: "deleteDeliveryZone",
    });
  },
});
