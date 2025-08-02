import { useParams, Link } from "react-router-dom";
import { useEvents } from "../../contexts/useEvents";
import Layout from "../../components/Layout";
import { DefaultContent } from "../../components/Event";
import WLST25Body from "../../components/Event/WLST25Body";

const extraEventComponents: Record<string, React.ComponentType | undefined> = {
  wlst25: WLST25Body,
};

const EventDetail = () => {
  const { eventNameShort } = useParams<{ eventNameShort: string }>();
  const { events, loading, error } = useEvents();

  if (loading) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <p aria-live="polite" className="text-lg text-gray-600">
            Loading event details...
          </p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <p aria-live="polite" className="text-lg text-red-600">
            Error loading event details: {error}
          </p>
        </div>
      </Layout>
    );
  }

  const event = Object.values(events).find(
    (e) => e.eventNameShort === eventNameShort
  );

  if (!event) {
    return (
      <Layout>
        <div className="py-20 flex flex-col items-center justify-center space-y-4">
          <p className="text-center text-lg text-red-500">Event not found.</p>
          <Link to="/" className="text-blue-600 underline">
            Go Home
          </Link>
        </div>
      </Layout>
    );
  }

  const ExtraContent = eventNameShort
    ? extraEventComponents[eventNameShort]
    : null;

  return (
    <Layout>
      <main className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        <section>
          <DefaultContent event={event} />
          {ExtraContent && <ExtraContent />}
        </section>
      </main>
    </Layout>
  );
};

export default EventDetail;
