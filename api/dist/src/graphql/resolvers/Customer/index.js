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
exports.CustomerAddress = exports.CustomerMutation = exports.CustomerQuery = exports.Customer = void 0;
const nexus_1 = require("nexus");
exports.Customer = (0, nexus_1.objectType)({
    name: "Customer",
    definition(t) {
        t.model.id();
        t.model.firstName();
        t.model.lastName();
        t.model.email();
        t.model.phone();
        t.model.addresses();
        t.model.orders();
        t.model.restaurants();
    },
});
exports.CustomerQuery = (0, nexus_1.extendType)({
    type: "Query",
    definition(t) {
        t.crud.customer();
        t.crud.customers({
            filtering: true,
            ordering: true,
            pagination: true,
        });
    },
});
exports.CustomerMutation = (0, nexus_1.extendType)({
    type: "Mutation",
    definition(t) {
        t.crud.createOneCustomer({ alias: "createCustomer" });
        t.crud.updateOneCustomer({ alias: "updateCustomer" });
        t.crud.deleteOneCustomer({ alias: "deleteCustomer" });
    },
});
exports.CustomerAddress = __importStar(require("./address"));
//# sourceMappingURL=index.js.map