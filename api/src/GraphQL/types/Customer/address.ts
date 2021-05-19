import { extendType, objectType } from "nexus";

export const CustomerAddress = objectType({
  name: "CustomerAddress",
  definition(t) {
    t.model.id();
    t.model.streetAddress();
    t.model.city();
    t.model.postCode();
    t.model.country();
    t.model.Customer();
    t.model.customerId();
  },
});

export const CustomerQuery = extendType({
  type: "Query",
  definition(t) {
    t.crud.customerAddress();
    t.crud.customerAddresses();
  },
});

export const CustomerMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOneCustomerAddress({ alias: "createCustomerAddress" });
    t.crud.updateOneCustomerAddress({ alias: "updateCustomerAddress" });
    t.crud.deleteOneCustomerAddress({ alias: "deleteCustomerAddress" });
  },
});
