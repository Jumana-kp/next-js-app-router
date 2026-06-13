
export const metadata = {
  title: "Contact Us",
  description: "Get in touch with us",
};

export default function ContactUsPage() {
  return (
    <div className="container py-5">
      <h1 className="mb-4">Contact Us</h1>

      <p>
        We'd love to hear from you! If you have any questions, feedback, or
        concerns, please feel free to reach out to us.
      </p>

      <div className="mt-4">
        <h5>📍 Address</h5>
        <p>123 Shopping Street, Dubai, UAE</p>

        <h5>📞 Phone</h5>
        <p>+971 50 123 4567</p>

        <h5>📧 Email</h5>
        <p>support@nextcart.com</p>

        <h5>🕒 Business Hours</h5>
        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
      </div>
    </div>
  );
}