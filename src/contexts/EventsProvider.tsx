import { useEffect, useState, type ReactNode } from "react";
import { EventsContext } from "./EventsContext";
import type { Event } from "../types/Event";
import { API_PATHS } from "../constants/api";

interface EventsProviderProps {
  children: ReactNode;
}

export const EventsProvider = ({ children }: EventsProviderProps) => {
  const [events, setEvents] = useState<Record<string, Event>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(API_PATHS.EVENTS_JSON);
        if (!res.ok) throw new Error("Failed to fetch events");
        const data: Record<string, Event> = await res.json();
        const parsedData: Record<string, Event> = {};
        for (const key in data) {
          parsedData[key] = {
            ...data[key],
            startDate: new Date(data[key].startDate),
            endDate: new Date(data[key].endDate),
          };
        }

        setEvents(parsedData);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(String(err)); // fallback to stringifying the unknown value
        }
        setEvents({});
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  return (
    <EventsContext.Provider value={{ events, loading, error }}>
      {children}
    </EventsContext.Provider>
  );
};
