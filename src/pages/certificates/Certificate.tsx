import { Link, useParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import Layout from "../../components/Layout";
import QR from "../../components/QR";
import EventCard from "../../components/Event/EventCard";
import { useEvents } from "../../contexts/useEvents";
import { decodeCertId } from "../../utils/certificateUtils";
import {
  resolveCertificateInfo,
  getCertificateImagePath,
  getParticipantsPath,
  parseTags,
  type CertificateData,
} from "../../utils/certificateUtils";
import { formatDate } from "../../utils/presentationUtils";

const Certificate: React.FC = () => {
  const { certId = "" } = useParams<{ certId: string }>();
  const { events } = useEvents();
  const [participant, setParticipant] = useState<CertificateData | null>(null);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [imageExists, setImageExists] = useState(true);

  const resolved = useMemo(() => {
    if (!certId || !events || Object.keys(events).length === 0) return null;
    return resolveCertificateInfo(certId, events);
  }, [certId, events]);

  useEffect(() => {
    setFetchError(null);
    setParticipant(null);

    if (!resolved?.certificateId || !resolved.eventEntry) {
      setLoading(false);
      return;
    }

    const participantsPath = getParticipantsPath(resolved.eventEntry);

    (async () => {
      try {
        setLoading(true);
        const res = await fetch(participantsPath);
        if (!res.ok)
          throw new Error("Could not fetch participant information.");
        const participants: Record<string, CertificateData> = await res.json();
        setParticipant(participants[resolved.certificateId] ?? null);
      } catch (e) {
        setFetchError(e instanceof Error ? e.message : String(e));
        setParticipant(null);
      } finally {
        setLoading(false);
      }
    })();
  }, [resolved]);

  if (loading) {
    return (
      <Layout>
        <div
          aria-live="polite"
          className="p-6 text-center text-gray-500 text-lg"
        >
          Loading…
        </div>
      </Layout>
    );
  }

  if (
    fetchError ||
    !certId ||
    !resolved ||
    !resolved.certificateId ||
    !resolved.eventEntry ||
    !participant
  ) {
    return (
      <Layout>
        <div className="p-6 text-center text-red-600 text-lg">
          ❌ Certificate not found.
          <Link to="/" className="text-blue-600 underline ml-2">
            Go Home
          </Link>
        </div>
      </Layout>
    );
  }

  const { certificateId, eventEntry, eventKey } = resolved;
  const decodedId = decodeCertId(certId);
  const imagePath = getCertificateImagePath(eventEntry, certificateId);
  const tags = parseTags(participant.tags as string);
  const issuedOn = formatDate(eventEntry.certificate.issuedOn);

  return (
    <Layout>
      <div className="max-w-2xl w-full mx-auto p-6 bg-white rounded-xl shadow-md mt-8 mb-8 border border-gray-200">
        {/* Row 1: Verified information and tags */}
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-green-700 mb-3">
            ✅ Certificate Verified
          </h1>
          <p className="text-base text-gray-800 mb-2">
            This certificate was issued to{" "}
            <span className="font-semibold text-blue-900">
              {participant.name}
            </span>{" "}
            on <span className="font-semibold text-blue-900">{issuedOn}</span>.
          </p>
          <p className="text-xs text-gray-500">ID: {decodedId}</p>
        </div>

        {tags.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-3 justify-center">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full border border-blue-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Row 2: Event card + QR code */}
        <div className="flex flex-col sm:flex-row sm:gap-6 mb-6">
          <div className="sm:flex-1 mb-4 sm:mb-0 flex flex-col items-center sm:items-start justify-center">
            {eventEntry && (
              <div className="w-full sm:w-80">
                <EventCard
                  eventKey={eventKey!}
                  eventName={eventEntry.eventName}
                  eventNameShort={eventEntry.eventNameShort}
                  startDate={eventEntry.startDate}
                  endDate={eventEntry.endDate}
                />
              </div>
            )}
          </div>
          <div className="sm:flex-1 flex flex-col items-center justify-center">
            <div
              role="img"
              aria-label={`QR code for certificate ID ${certId}`}
              className="inline-block border border-blue-300 rounded-md px-1.5 py-1 bg-blue-50"
            >
              <QR certificateId={certId} size={120} />
            </div>
          </div>
        </div>

        {/* Row 3: Certificate image */}
        {imageExists ? (
          <div className="w-full max-w-3xl mx-auto">
            <img
              src={imagePath}
              alt={`Certificate issued to ${participant.name} for ${eventEntry.eventName}`}
              className="w-full rounded-md border shadow-sm"
              onError={() => setImageExists(false)}
            />
          </div>
        ) : (
          <div className="mt-6 p-4 bg-yellow-100 border border-yellow-300 text-yellow-800 rounded text-center">
            ⚠️ Certificate image is not available.
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Certificate;
