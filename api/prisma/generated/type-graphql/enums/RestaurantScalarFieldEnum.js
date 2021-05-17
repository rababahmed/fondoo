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
exports.RestaurantScalarFieldEnum = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
var RestaurantScalarFieldEnum;
(function (RestaurantScalarFieldEnum) {
    RestaurantScalarFieldEnum["id"] = "id";
    RestaurantScalarFieldEnum["name"] = "name";
    RestaurantScalarFieldEnum["email"] = "email";
    RestaurantScalarFieldEnum["restaurantPlanId"] = "restaurantPlanId";
    RestaurantScalarFieldEnum["businessPhone"] = "businessPhone";
    RestaurantScalarFieldEnum["reservationPhone"] = "reservationPhone";
    RestaurantScalarFieldEnum["url"] = "url";
    RestaurantScalarFieldEnum["cuisine"] = "cuisine";
    RestaurantScalarFieldEnum["address"] = "address";
    RestaurantScalarFieldEnum["city"] = "city";
    RestaurantScalarFieldEnum["postCode"] = "postCode";
    RestaurantScalarFieldEnum["country"] = "country";
    RestaurantScalarFieldEnum["currency"] = "currency";
    RestaurantScalarFieldEnum["priceRange"] = "priceRange";
    RestaurantScalarFieldEnum["diningStyle"] = "diningStyle";
    RestaurantScalarFieldEnum["vat"] = "vat";
    RestaurantScalarFieldEnum["serviceCharge"] = "serviceCharge";
    RestaurantScalarFieldEnum["hasParkingFacilities"] = "hasParkingFacilities";
    RestaurantScalarFieldEnum["hasPartyFacilities"] = "hasPartyFacilities";
    RestaurantScalarFieldEnum["hasKidsZone"] = "hasKidsZone";
    RestaurantScalarFieldEnum["isTakeaway"] = "isTakeaway";
    RestaurantScalarFieldEnum["isDelivery"] = "isDelivery";
    RestaurantScalarFieldEnum["isReservation"] = "isReservation";
    RestaurantScalarFieldEnum["isAutoAcceptOrder"] = "isAutoAcceptOrder";
    RestaurantScalarFieldEnum["isAutoAcceptReservation"] = "isAutoAcceptReservation";
    RestaurantScalarFieldEnum["createdAt"] = "createdAt";
    RestaurantScalarFieldEnum["updatedAt"] = "updatedAt";
})(RestaurantScalarFieldEnum = exports.RestaurantScalarFieldEnum || (exports.RestaurantScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(RestaurantScalarFieldEnum, {
    name: "RestaurantScalarFieldEnum",
    description: undefined,
});
