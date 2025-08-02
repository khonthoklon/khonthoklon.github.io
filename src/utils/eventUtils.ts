import type { Event } from "../types/Event";

export const sortEventsByStartDateDesc = (events: Record<string, Event>) => {
  return Object.entries(events).sort(([, a], [, b]) => {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });
};
