import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { formatDate } from "../../utils/presentationUtils";

interface EventCardProps {
  eventKey: string;
  eventName: string;
  eventNameShort: string;
  startDate: Date;
  endDate: Date;
}

const EventCard: React.FC<EventCardProps> = ({
  eventName,
  eventNameShort,
  startDate,
  endDate,
}) => {
  return (
    <article
      className="flex flex-col justify-between h-full bg-white border border-blue-100 rounded-2xl shadow-sm p-5 md:p-6"
      aria-label={`Event card for ${eventName}`}
    >
      <div>
        <h3 className="font-semibold text-blue-900 text-base md:text-lg mb-1 line-clamp-2">
          {eventName}
        </h3>
        <span className="block text-blue-800 text-xs md:text-sm mb-5">
          📅 {formatDate(startDate)} &ndash; {formatDate(endDate)}
        </span>
      </div>
      <Link
        to={ROUTES.buildEventDetail(eventNameShort)}
        className="inline-flex items-center self-start gap-1 px-3 py-1.5 rounded bg-blue-100 text-blue-700 hover:bg-blue-200 hover:text-blue-900 font-semibold text-xs md:text-sm transition focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label={`View details for ${eventName}`}
      >
        View Event <span aria-hidden>→</span>
      </Link>
    </article>
  );
};

export default EventCard;
