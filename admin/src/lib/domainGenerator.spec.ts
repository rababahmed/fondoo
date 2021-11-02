import { domainGenerator } from "./domainGenerator";

test("Converts restaurant name to tezzbites sites subdomain", () => {
  expect(domainGenerator("Burger King ")).toBe(
    "burgerking.sites.tezzbites.com"
  );
});
