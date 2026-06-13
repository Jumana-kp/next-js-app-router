
export const metadata = {
  title: "About Us",
  description: "Learn more about our company",
};

export default function AboutUsPage() {
  return (
    <div className="container py-5">
      <h1 className="mb-4">About NextCart</h1>

      <p>
        Welcome to <strong>NextCart</strong>, your one-stop online shopping
        destination. Our goal is to provide customers with a simple, fast, and
        secure shopping experience.
      </p>

      <p>
        We offer a wide variety of products across different categories,
        ensuring quality and affordability for every customer.
      </p>

      <p>
        This application was built using Next.js App Router to demonstrate
        modern web development concepts such as dynamic routing, server
        components, client components, and responsive design.
      </p>
    </div>
  );
}