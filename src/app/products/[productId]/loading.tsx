export default function Loading() {
  return (
    <div className="text-center py-5">
      <div
        className="spinner-border text-success"
        role="status"
      >
        <span className="visually-hidden">
          Loading...
        </span>
      </div>

      <p className="mt-3">
        Loading Product Details...
      </p>
    </div>
  );
}