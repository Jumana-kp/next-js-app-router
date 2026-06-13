"use client";

import Link from "next/link";

export default function Navbar() {
  return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
            
      <div className="container">
        <Link
          className="navbar-brand fw-bold fs-3"
          href="/"
        >
          🛍️ NextCart
        </Link>
         
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <div className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <Link className="nav-link" href="/">
              Home
            </Link>

            <Link className="nav-link" href="/products">
              Products
            </Link>

            <Link className="nav-link" href="/about-us">
              About Us
            </Link>

            <Link className="nav-link" href="/contact-us">
              Contact Us
            </Link>

            <Link
              className="btn btn-light text-primary fw-semibold ms-lg-2"
              href="/cart"
            >
              🛒 Cart
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}