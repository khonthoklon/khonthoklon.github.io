import { WLST25_REGISTRATION_URL } from "../../../constants/urls";

const RegisterButton = () => {
  return (
    <div className="sticky top-4 float-right z-10">
      <a
        href={WLST25_REGISTRATION_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Register for Workshop on Low-Resource Speech Technology"
        className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-md shadow hover:bg-blue-700 transition"
      >
        Register Now
      </a>
    </div>
  );
};

export default RegisterButton;
