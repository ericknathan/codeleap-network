import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export function setupDayjs() {
  dayjs.extend(relativeTime);
}

export function getRelativeDate(date: Date | string) {
  if (typeof date === "string") date = new Date(date);
  return dayjs(date).fromNow();
}
