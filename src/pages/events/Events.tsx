import { useMemo } from "react";
import Layout from "../../components/Layout";
import EventCard from "../../components/Event/EventCard";
import { useEvents } from "../../contexts/useEvents";

const Events: React.FC = () => {
  const { events, loading, error } = useEvents();

  // Memoize sorted events to avoid re-sorting on every render
  const sortedEvents = useMemo(() => {
    return Object.entries(events).sort(
      ([, a], [, b]) => b.startDate.getTime() - a.startDate.getTime()
    );
  }, [events]);

  if (loading) {
    return (
      <Layout>
        <div className="max-w-2xl mx-auto p-4 text-center text-gray-600">
          Loading events...
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="max-w-2xl mx-auto p-4 text-center text-red-600">
          Error loading events: {error}
        </div>
      </Layout>
    );
  }

  if (sortedEvents.length === 0) {
    return (
      <Layout>
        <div className="max-w-2xl mx-auto p-4 text-center text-gray-600">
          No events available.
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">All Events</h1>
        <div className="grid gap-4">
          {sortedEvents.map(([key, event]) => (
            <EventCard
              key={key}
              eventKey={key}
              eventName={event.eventName}
              eventNameShort={event.eventNameShort}
              startDate={event.startDate}
              endDate={event.endDate}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Events;
