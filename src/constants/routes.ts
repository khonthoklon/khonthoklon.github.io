interface RoutesType {
  HOME: string;
  CERTIFICATES: string;
  CERTIFICATE_DETAIL: string;
  EVENTS: string;
  EVENT_DETAIL: string;
  NOT_FOUND: string;
  buildCertificateDetail(certId: string): string;
  buildEventDetail(eventNameShort: string): string;
}

export const ROUTES: RoutesType = {
  HOME: "/",
  CERTIFICATES: "/certificates",
  CERTIFICATE_DETAIL: "/certificates/:certId",
  EVENTS: "/events",
  EVENT_DETAIL: "/events/:eventNameShort",
  NOT_FOUND: "*",

  buildCertificateDetail: (certId: string) => `/certificates/${certId}`,
  buildEventDetail: (eventNameShort: string) => `/events/${eventNameShort}`,
};
