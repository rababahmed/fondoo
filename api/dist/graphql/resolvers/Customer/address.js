"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerMutation = exports.CustomerQuery = exports.CustomerAddress = void 0;
const nexus_1 = require("nexus");
exports.CustomerAddress = (0, nexus_1.objectType)({
    name: "CustomerAddress",
    definition(t) {
        t.model.id();
        t.model.streetAddress();
        t.model.city();
        t.model.postCode();
        t.model.country();
        t.model.customer();
        t.model.customerId();
    },
});
exports.CustomerQuery = (0, nexus_1.extendType)({
    type: "Query",
    definition(t) {
        t.crud.customerAddress();
        t.crud.customerAddresses({
            filtering: true,
            ordering: true,
            pagination: true,
        });
    },
});
exports.CustomerMutation = (0, nexus_1.extendType)({
    type: "Mutation",
    definition(t) {
        t.crud.createOneCustomerAddress({ alias: "createCustomerAddress" });
        t.crud.updateOneCustomerAddress({ alias: "updateCustomerAddress" });
        t.crud.deleteOneCustomerAddress({ alias: "deleteCustomerAddress" });
    },
});
//# sourceMappingURL=address.js.map