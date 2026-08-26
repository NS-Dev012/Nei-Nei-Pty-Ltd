import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center">

        <p className="text-6xl font-bold text-[#C9A227]">
          404
        </p>

        <h1 className="mt-4 text-3xl font-bold text-[#0B1F3A]">
          Page Not Found
        </h1>

        <p className="mt-3 text-gray-600">
          The page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block rounded-md bg-[#0B1F3A] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#162f52]"
        >
          Back to Home
        </Link>

      </div>
    </section>
  );
}

export default NotFound;