import { chain, generic, ruleType } from "nexus-shield";

export const isAuthenticated = generic(
  ruleType({
    resolve: (_root, _args, ctx) => {
      return !!ctx.user;
    },
  })
);

export const isAdmin = generic(
  chain(
    isAuthenticated(),
    ruleType({
      resolve: (_root, _args, ctx) => {
        return ctx.user?.role === "Admin";
      },
    })
  )
);

export const isOwner = generic(
  chain(
    isAuthenticated(),
    ruleType({
      resolve: (_root, _args, ctx) => {
        return ctx.user?.role === "Owner";
      },
    })
  )
);

export const isManager = generic(
  chain(
    isAuthenticated(),
    ruleType({
      resolve: (_root, _args, ctx) => {
        return ctx.user?.role === "Manager";
      },
    })
  )
);
