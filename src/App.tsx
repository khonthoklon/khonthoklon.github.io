import { HashRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants/routes";

import Home from "./pages/Home";
import CertificateSearch from "./pages/certificates/CertificateSearch";
import Certificate from "./pages/certificates/Certificate";
import Events from "./pages/events/Events";
import EventDetail from "./pages/events/EventDetail";
import { EventsProvider } from "./contexts/EventsProvider";
import NotFoundPage from "./pages/NotFound";

const App = () => {
  return (
    <EventsProvider>
      <HashRouter basename="/">
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.CERTIFICATES} element={<CertificateSearch />} />
          <Route path={ROUTES.CERTIFICATE_DETAIL} element={<Certificate />} />
          <Route path={ROUTES.EVENTS} element={<Events />} />
          <Route path={ROUTES.EVENT_DETAIL} element={<EventDetail />} />
          <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
        </Routes>
      </HashRouter>
    </EventsProvider>
  );
};

export default App;
