import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import EventCard from "../components/Event/EventCard";
import About from "../components/About";
import { ROUTES } from "../constants/routes";
import { useEvents } from "../contexts/useEvents";
import { sortEventsByStartDateDesc } from "../utils/eventUtils";
import { useMemo } from "react";

const Home = () => {
  const { events, loading, error } = useEvents();

  const sortedEvents = useMemo(
    () => sortEventsByStartDateDesc(events),
    [events]
  );
  const latestThreeEvents = useMemo(
    () => sortedEvents.slice(0, 3),
    [sortedEvents]
  );

  if (error) {
    return (
      <Layout>
        <div className="max-w-3xl mx-auto p-4 text-center text-red-600">
          Error fetching events: {error}
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex flex-col gap-16 p-4 max-w-3xl mx-auto">
        {/* About Section */}
        <About />

        {/* Events Preview Section */}
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Upcoming & Past Events
          </h2>

          {loading ? (
            <p className="text-center text-gray-500" aria-live="polite">
              Loading events...
            </p>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {latestThreeEvents.length > 0 ? (
                latestThreeEvents.map(([key, event]) => (
                  <EventCard
                    key={key}
                    eventKey={key}
                    eventName={event.eventName}
                    eventNameShort={event.eventNameShort}
                    startDate={event.startDate}
                    endDate={event.endDate}
                  />
                ))
              ) : (
                <p
                  className="text-gray-500 text-center col-span-full"
                  aria-live="polite"
                >
                  No events available.
                </p>
              )}
            </div>
          )}

          <div className="flex justify-center mt-8">
            <Link
              to={ROUTES.EVENTS}
              className="bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              View All Events
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
