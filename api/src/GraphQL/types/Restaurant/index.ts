import { extendType, objectType } from "nexus";

export const Restaurant = objectType({
  name: "Restaurant",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.email();
    t.model.businessPhone();
    t.model.reservationPhone();
    t.model.url();
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
    t.model.customers();
    t.model.orders();
    t.model.orderItems();
    t.model.productCategory();
    t.model.products();
    t.model.plan();
    t.model.restaurantPlanId();
    t.model.users();
    t.model.createdAt();
  },
});

export const RestaurantQuery = extendType({
  type: "Query",
  definition(t) {
    t.crud.restaurant();
    t.crud.restaurants({
      filtering: true,
      ordering: true,
      pagination: true,
    });
  },
});

export const RestaurantMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOneRestaurant({ alias: "createRestaurant" });
    t.crud.updateOneRestaurant({ alias: "updateRestaurant" });
    t.crud.deleteOneRestaurant({ alias: "deleteRestaurant" });
  },
});

export * as DeliveryZone from "./DeliveryZone";
export * as RestaurantPlan from "./RestaurantPlan";
export * as Schedule from "./schedule";
