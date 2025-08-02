import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { encodeCertId } from "../../utils/certificateUtils";
import Layout from "../../components/Layout";

const STORAGE_KEY = "khonthoklon_cert_id";

const CertificateSearch: React.FC = () => {
  const [certId, setCertId] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedId = localStorage.getItem(STORAGE_KEY);
    if (storedId) {
      setCertId(storedId);
      setRememberMe(true);
    }
  }, []);

  const trimmedCertId = certId.trim();
  const isSubmitDisabled = trimmedCertId.length === 0;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitDisabled) return;
    const formattedId = encodeCertId(trimmedCertId);
    if (rememberMe) {
      localStorage.setItem(STORAGE_KEY, trimmedCertId);
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
    navigate(ROUTES.buildCertificateDetail(formattedId));
  };

  return (
    <Layout>
      <div className="w-full max-w-md mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Verify Certificate
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Please enter the certificate ID to verify its authenticity.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
          noValidate
        >
          <input
            id="certId"
            aria-describedby="certIdHelp"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={certId}
            onChange={(e) => setCertId(e.target.value)}
            placeholder="Enter certificate ID"
            autoComplete="off"
          />
          <p id="certIdHelp" className="sr-only">
            Enter your certificate ID
          </p>

          <label
            htmlFor="rememberMe"
            className="flex items-center gap-2 text-sm text-gray-600"
          >
            <input
              id="rememberMe"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="rounded"
            />
            Remember this ID on this device
          </label>

          <button
            type="submit"
            disabled={isSubmitDisabled}
            className={`w-full py-3 rounded-lg font-semibold transition ${
              isSubmitDisabled
                ? "bg-blue-300 text-white cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Verify
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default CertificateSearch;
