import { nexusPrisma } from "nexus-plugin-prisma";
import { makeSchema } from "nexus";
import path from "path";
import * as types from "./types/";
import { allow, nexusShield } from "nexus-shield";
import { ForbiddenError } from "apollo-server-errors";

export const schema = makeSchema({
  types,
  plugins: [
    nexusPrisma({
      experimentalCRUD: true,
      shouldGenerateArtifacts: true,
    }),
    nexusShield({
      defaultError: new ForbiddenError("Access Denied"),
      defaultRule: allow,
    }),
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
