"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMutation = exports.UserQuery = exports.UserToken = void 0;
const nexus_1 = require("nexus");
exports.UserToken = nexus_1.objectType({
    name: "UserToken",
    definition(t) {
        t.model.id();
        t.model.provider();
        t.model.token();
        t.model.User();
        t.model.userId();
    },
});
exports.UserQuery = nexus_1.extendType({
    type: "Query",
    definition(t) {
        t.crud.userToken();
        t.crud.userTokens();
    },
});
exports.UserMutation = nexus_1.extendType({
    type: "Mutation",
    definition(t) {
        t.crud.createOneUserToken({ alias: "createUserToken" });
        t.crud.updateOneUserToken({ alias: "updateUserToken" });
        t.crud.deleteOneUserToken({ alias: "deleteUserToken" });
    },
});
//# sourceMappingURL=token.js.map