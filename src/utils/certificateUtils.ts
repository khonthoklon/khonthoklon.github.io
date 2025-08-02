import { ROUTES } from "../constants/routes";
import type { Event } from "../types/Event";


export function encodeCertId(rawId: string): string {
  return rawId.trim().replaceAll("/", "__").replaceAll(" ", "_");
}

export function decodeCertId(encodedId: string): string {
  return encodedId.replaceAll("__", "/").replaceAll("_", " ");
}

export interface CertificateData {
  name: string;
  tags?: string;
  [key: string]: unknown;
}

interface ResolveResult {
  certificateId: string;
  eventEntry: Event | null;
  eventKey: string | null;
  eventDetailLink: string | null;
  error: string | null;
}

export function resolveCertificateInfo(
  certId: string,
  events: Record<string, Event>
): ResolveResult {
  if (!certId) {
    return { certificateId: "", eventEntry: null, eventKey: null, eventDetailLink: null, error: "Empty certificate ID" };
  }

  const parts = certId.split("__");
  if (parts.length < 2) {
    return {
      certificateId: "",
      eventEntry: null,
      eventKey: null,
      eventDetailLink: null,
      error: "Invalid certificate ID format",
    };
  }

  const rawId = parts.pop();
  const eventKey = parts.join("__");

  if (!rawId) {
    return {
      certificateId: "",
      eventEntry: null,
      eventKey,
      eventDetailLink: null,
      error: "Missing certificate identifier",
    };
  }

  const certificateId = rawId.startsWith("certificate_")
    ? rawId
    : `certificate_${rawId}`;

  const eventEntry = events[eventKey] ?? null;
  const eventDetailLink = eventEntry
    ? ROUTES.buildEventDetail(eventEntry.eventNameShort)
    : null;

  return {
    certificateId,
    eventEntry,
    eventKey,
    eventDetailLink,
    error: eventEntry ? null : "Event not found for certificate",
  };
}

export function getCertificateImagePath(eventEntry: Event, certificateId: string): string {
  return `${eventEntry.certificate.path}/images/${certificateId}.png`;
}

export function getParticipantsPath(eventEntry: Event): string {
  return `${eventEntry.certificate.path}/participants.json`;
}

export function parseTags(tagString: string | undefined): string[] {
  if (!tagString) return [];
  return tagString
    .split(";")
    .map((tag) => tag.trim())
    .filter((tag) => tag.length > 0);
}

