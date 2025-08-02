import type { Event } from "../../types/Event";
import { formatDate } from "../../utils/presentationUtils";

interface DefaultContentProps {
  event: Event;
}

function DefaultContent({ event }: DefaultContentProps) {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold">{event.eventName}</h1>

      <p className="text-gray-600">
        {formatDate(event.startDate)} to {formatDate(event.endDate)} |{" "}
        <strong>{event.venue}</strong>
      </p>

      <p className="text-lg">{event.description}</p>

      {event.resourceURLs && event.resourceURLs.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mt-4">Resources</h2>
          <ul className="list-disc list-inside pl-4 space-y-1">
            {event.resourceURLs.map((resource, idx) => (
              <li key={idx}>
                {typeof resource === "string"
                  ? resource
                  : Object.entries(resource).map(([label, url]) => (
                      <a
                        key={label}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline hover:text-blue-800"
                      >
                        {label}
                      </a>
                    ))}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <h2 className="text-xl font-semibold mt-4">Certificates</h2>
        <p>Issue Date: {formatDate(event.certificate.issuedOn)}</p>
      </div>
    </div>
  );
}

export default DefaultContent;
