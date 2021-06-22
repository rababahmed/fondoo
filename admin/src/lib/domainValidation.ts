import * as yup from "yup";

yup.addMethod(
  yup.string,
  "domain",
  function pattern(name, message = "Please enter a valid domain") {
    const domainRules = [patterns.domain, patterns.punycode];

    return this.test({
      message,
      test: (value) =>
        value === null ||
        value === "" ||
        value === undefined ||
        domainRules.some((regex) => regex.test(value)),
    });
  }
);

const patterns = {
  domain: /^(?!:\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,11}?$/,
  punycode: /^([A-Za-z0-9](?:(?:[-A-Za-z0-9]){0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:(?:[-A-Za-z0-9]){0,61}[A-Za-z0-9])?)*)(\.?)$/,
};

export const Domain = yup.object({
  domain: yup.string().domain().required(),
});
