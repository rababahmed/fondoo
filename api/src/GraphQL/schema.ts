import { nexusPrisma } from "nexus-plugin-prisma";
import { makeSchema } from "nexus";
import path from "path";
import * as types from "./types/";

export const schema = makeSchema({
  types,
  plugins: [
    nexusPrisma({ experimentalCRUD: true, shouldGenerateArtifacts: true }),
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
