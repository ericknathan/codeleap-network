import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export function setupDayjs() {
  dayjs.extend(relativeTime);
}
