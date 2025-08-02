import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <Layout>
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
      <Link to="/" className="text-blue-600 underline">
        Go Back Home
      </Link>
    </div>
  </Layout>
);

export default NotFoundPage;
