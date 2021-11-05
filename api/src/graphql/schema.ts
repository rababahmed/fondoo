import { nexusPrisma } from "@kenchi/nexus-plugin-prisma";
import { declarativeWrappingPlugin, makeSchema } from "nexus";
import path from "path";
import * as types from "./resolvers";
import { allow, nexusShield } from "nexus-shield";
import { ForbiddenError } from "apollo-server-errors";

export const schema = makeSchema({
  types,
  plugins: [
    nexusPrisma({
      experimentalCRUD: true,
      shouldGenerateArtifacts: true,
      outputs: {
        typegen: __dirname + "/generated/typegen-nexus-plugin-prisma.d.ts",
      },
    }),
    nexusShield({
      defaultError: new ForbiddenError("Access Denied"),
      defaultRule: allow,
    }),
    declarativeWrappingPlugin(),
  ],
  outputs: {
    schema: path.join(__dirname, "/generated/schema.graphql"),
    typegen: path.join(__dirname, "/generated/nexus.ts"),
  },
  contextType: {
    module: require.resolve("../context"),
    export: "Context",
  },
  sourceTypes: {
    modules: [
      {
        module: "@prisma/client",
        alias: "prisma",
      },
    ],
  },
});
