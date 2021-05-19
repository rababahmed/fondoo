import { extendType, objectType } from "nexus";

export const UserToken = objectType({
  name: "UserToken",
  definition(t) {
    t.model.id();
    t.model.provider();
    t.model.token();
    t.model.User();
    t.model.userId();
  },
});

export const UserQuery = extendType({
  type: "Query",
  definition(t) {
    t.crud.userToken();
    t.crud.userTokens();
  },
});

export const UserMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOneUserToken({ alias: "createUserToken" });
    t.crud.updateOneUserToken({ alias: "updateUserToken" });
    t.crud.deleteOneUserToken({ alias: "deleteUserToken" });
  },
});
