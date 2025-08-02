import { useContext } from "react";
import { EventsContext, type EventsContextType } from "./EventsContext";

export const useEvents = (): EventsContextType => {
  const context = useContext(EventsContext);
  if (!context) {
    throw new Error("useEvents must be used within an EventsProvider");
  }
  return context;
};
