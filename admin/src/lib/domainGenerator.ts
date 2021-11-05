export const domainGenerator = (name: string) => {
  const str = name.replace(/\s/g, "").toLocaleLowerCase();
  const domain = str + ".sites.tezzbites.com";
  return domain;
};
