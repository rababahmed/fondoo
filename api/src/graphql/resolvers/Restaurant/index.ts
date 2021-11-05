import { extendType, objectType } from "nexus";
import { or } from "nexus-shield";
import { isAdmin, isManager, isOwner } from "../../rules/isAuthenticated";

export const Restaurant = objectType({
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
    t.model.hasPickup();
    t.model.hasDelivery();
    t.model.hasReservation();
    t.model.isAutoAcceptOrder();
    t.model.isAutoAcceptReservation();
    t.model.schedules({
      filtering: true,
      ordering: true,
      pagination: true,
    });
    t.model.deliveryZones({
      filtering: true,
      ordering: true,
      pagination: true,
    });
    t.model.customers({ shield: or(isAdmin(), isOwner(), isManager()) });
    t.model.offers();
    t.model.coupons();
    t.model.orders({ shield: or(isAdmin(), isOwner(), isManager()) });
    t.model.orderItems({ shield: or(isAdmin(), isOwner(), isManager()) });
    t.model.productCategory({
      filtering: true,
      ordering: true,
      pagination: true,
    });
    t.model.products({ filtering: true, ordering: true, pagination: true });
    t.model.plan({ shield: or(isAdmin(), isOwner(), isManager()) });
    t.model.restaurantPlanId({ shield: or(isAdmin(), isOwner(), isManager()) });
    t.model.users({ shield: or(isAdmin(), isOwner(), isManager()) });
    t.model.config();
    t.model.socials();
    t.model.CMSHome();
    t.model.CMSAbout();
    t.model.CMSReview();
    t.model.CMSReservation();
    t.model.CMSContact();
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
      shield: or(isAdmin(), isOwner(), isManager()),
    });
  },
});

export const RestaurantMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOneRestaurant({
      alias: "createRestaurant",
      shield: or(isAdmin()),
    });
    t.crud.updateOneRestaurant({
      alias: "updateRestaurant",
      shield: or(isAdmin(), isOwner(), isManager()),
    });
    t.crud.deleteOneRestaurant({
      alias: "deleteRestaurant",
      shield: or(isAdmin()),
    });
  },
});

export * as DeliveryZone from "./DeliveryZone";
export * as RestaurantPlan from "./RestaurantPlan";
export * as Schedule from "./schedule";
export * as RestaurantConfig from "./RestaurantConfig";
export * as RestaurantSocial from "./RestaurantSocial";
export * as RestaurantReview from "./RestaurantReview";
export * as Domain from "./Domain";
