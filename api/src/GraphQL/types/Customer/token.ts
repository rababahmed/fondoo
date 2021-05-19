import { extendType, objectType } from "nexus";

export const CustomerToken = objectType({
  name: "CustomerToken",
  definition(t) {
    t.model.id();
    t.model.token();
    t.model.Customer();
    t.model.customerId();
  },
});

export const CustomerQuery = extendType({
  type: "Query",
  definition(t) {
    t.crud.customerToken();
    t.crud.customerTokens();
  },
});

export const CustomerMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOneCustomerToken({ alias: "createCustomerToken" });
    t.crud.updateOneCustomerToken({ alias: "updateCustomerToken" });
    t.crud.deleteOneCustomerToken({ alias: "deleteCustomerToken" });
  },
});
