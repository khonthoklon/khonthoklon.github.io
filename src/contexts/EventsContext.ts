import { createContext } from "react";
import type { Event } from "../types/Event";

export interface EventsContextType {
  events: Record<string, Event>;
  loading: boolean;
  error: string | null;
}

export const EventsContext = createContext<EventsContextType>({
  events: {},
  loading: true,
  error: null,
});
