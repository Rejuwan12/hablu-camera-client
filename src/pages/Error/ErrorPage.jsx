
const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="font-bold text-gray-800 text-9xl">404</h1>
        <p className="text-2xl font-semibold text-gray-600 md:text-3xl">
          Oops! Page not found.
        </p>
        <p className="mt-4 text-gray-500">
          The page you’re looking for doesn’t exist.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 mt-6 text-sm font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
