import { format } from "date-fns";

export const getOpeningHours = (rdata: any) => {
  const serverDate = format(new Date(), "eeee");
  const openingData = rdata.schedules.find((x: any) => x.day === serverDate);
  return openingData;
};
