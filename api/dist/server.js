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
const Sentry = __importStar(require("@sentry/node"));
const Tracing = __importStar(require("@sentry/tracing"));
const PORT = process.env.PORT || 4000;
const app = (0, express_1.default)();
Sentry.init({
    dsn: "https://f9d96ddc47274dacb3d42f4c53d1dbae@o881594.ingest.sentry.io/6255936",
    integrations: [
        new Sentry.Integrations.Http({ tracing: true }),
        new Tracing.Integrations.Express({ app }),
    ],
    tracesSampleRate: 1.0,
    environment: process.env.NODE_ENV === "production" ? "production" : "development",
});
const main = async () => {
    app.use(Sentry.Handlers.requestHandler());
    app.use(Sentry.Handlers.tracingHandler());
    app.use(express_1.default.json());
    app.use(passport_1.default.initialize());
    app.use((0, cors_1.default)());
    app.use(Sentry.Handlers.errorHandler());
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
    app.use(Sentry.Handlers.errorHandler());
    app.listen(PORT, () => {
        console.log(`🚀 Server ready at http://localhost:${PORT}`);
    });
};
exports.main = main;
//# sourceMappingURL=server.js.map