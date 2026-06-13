import Banner from "./components/banner/Banner";
import OfferPage from "./components/offerPage/OfferPage";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to our e-commerce store",
};

export default function HomePage() {
  return (
    <>
      <Banner/>
      <OfferPage/> 
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card text-center p-4">
            <h4>🚚 Fast Delivery</h4>
            <p>Quick and reliable shipping.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center p-4">
            <h4>🔒 Secure Payments</h4>
            <p>Safe and trusted transactions.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center p-4">
            <h4>⭐ Quality Products</h4>
            <p>Premium products at affordable prices.</p>
          </div>
        </div>


      </div>
      
    </>
  );
}