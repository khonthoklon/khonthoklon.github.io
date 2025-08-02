export interface Event {
  eventName: string;
  eventNameShort: string;
  description: string;
  startDate: Date;
  endDate: Date;
  venue: string;
  resourceURLs: (string | { [key: string]: string })[];
  certificate: {
    path: string;
    issuedOn: Date;
  };
}
