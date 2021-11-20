"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const context_1 = require("./context");
const schema_1 = require("./graphql/schema");
const passport_1 = __importDefault(require("passport"));
const index_1 = __importDefault(require("./routes/v1/index"));
const cors_1 = __importDefault(require("cors"));
const index_2 = require("./lib/passport/index");
const sentry_1 = __importDefault(require("./lib/sentry"));
const PORT = process.env.PORT || 4000;
const app = (0, express_1.default)();
const main = async () => {
    app.use(sentry_1.default.Handlers.requestHandler());
    app.use(express_1.default.json());
    app.use(passport_1.default.initialize());
    app.use((0, cors_1.default)());
    app.use(sentry_1.default.Handlers.errorHandler());
    app.use(express_1.default.urlencoded({ extended: true }));
    (0, index_2.applyPassportStrategy)(passport_1.default);
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: schema_1.schema,
        introspection: process.env.NODE_ENV === "production" ? false : true,
        playground: process.env.NODE_ENV === "production" ? false : true,
        context: context_1.createContext,
        uploads: true,
    });
    apolloServer.applyMiddleware({ app });
    app.use("/v1", index_1.default);
    app.get("/", (_, res) => {
        res.status(200).send("All systems operational");
    });
    app.listen(PORT, () => {
        console.log(`🚀 Server ready at http://localhost:${PORT}`);
    });
};
exports.main = main;
//# sourceMappingURL=server.js.map