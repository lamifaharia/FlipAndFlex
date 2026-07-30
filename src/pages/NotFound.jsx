import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center gap-6">

      <h1 className="text-7xl font-black">
        404
      </h1>

      <p>Page Not Found</p>

      <Link
        to="/"
        className="btn btn-primary"
      >
        Back Home
      </Link>

    </section>
  );
};

export default NotFound;