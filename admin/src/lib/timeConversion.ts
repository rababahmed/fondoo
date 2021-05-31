export const convertTime = (str: any) => {
  let [hh, mm, ss, ms] = str.split(":");
  return `${hh}${+mm > 0 ? `:${mm}` : ""}${hh > 12 ? "PM" : "AM"}`;
};
