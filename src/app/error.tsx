"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="container py-5 text-center">
      <h2 className="text-danger">Something went wrong</h2>

      <p className="mt-3">{error.message}</p>

      <button
        className="btn btn-primary mt-3"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}