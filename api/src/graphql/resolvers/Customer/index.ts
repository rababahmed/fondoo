import { extendType, objectType } from "nexus";

export const Customer = objectType({
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

export const CustomerQuery = extendType({
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

export const CustomerMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOneCustomer({ alias: "createCustomer" });
    t.crud.updateOneCustomer({ alias: "updateCustomer" });
    t.crud.deleteOneCustomer({ alias: "deleteCustomer" });
  },
});

export * as CustomerAddress from "./address";
