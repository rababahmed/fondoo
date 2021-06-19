"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerMutation = exports.CustomerQuery = exports.CustomerToken = void 0;
const nexus_1 = require("nexus");
exports.CustomerToken = nexus_1.objectType({
    name: "CustomerToken",
    definition(t) {
        t.model.id();
        t.model.token();
        t.model.Customer();
        t.model.customerId();
    },
});
exports.CustomerQuery = nexus_1.extendType({
    type: "Query",
    definition(t) {
        t.crud.customerToken();
        t.crud.customerTokens({
            filtering: true,
            ordering: true,
            pagination: true,
        });
    },
});
exports.CustomerMutation = nexus_1.extendType({
    type: "Mutation",
    definition(t) {
        t.crud.createOneCustomerToken({ alias: "createCustomerToken" });
        t.crud.updateOneCustomerToken({ alias: "updateCustomerToken" });
        t.crud.deleteOneCustomerToken({ alias: "deleteCustomerToken" });
    },
});
//# sourceMappingURL=token.js.map