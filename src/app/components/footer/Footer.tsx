export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container text-center">
        <p className="mb-0">
          © {new Date().getFullYear()} NextCart. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}