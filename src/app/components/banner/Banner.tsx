"use client";

import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div
      id="nextCartCarousel"
      className="carousel slide carousel-fade mb-5"
      data-bs-ride="carousel"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#nextCartCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />

        <button
          type="button"
          data-bs-target="#nextCartCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        />

        <button
          type="button"
          data-bs-target="#nextCartCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        />
      </div>

      {/* Slides */}
      <div className="carousel-inner rounded shadow">

        {/* Slide 1 */}
        <div className="carousel-item active">
          <Image
            src="/next1.jpg"
            alt="Welcome to NextCart"
            width={1200}
            height={500}
            className="d-block w-100"
            style={{
              height: "500px",
              objectFit: "cover",
            }}
            priority
          />

          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
            <h1 className="fw-bold">
              Welcome to NextCart
            </h1>

            <p>
              Shop the latest products at amazing prices.
            </p>

            <Link
              href="/products"
              className="btn btn-primary"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <Image
            src="/next2.jpg"
            alt="Electronics"
            width={1200}
            height={500}
            className="d-block w-100"
            style={{
              height: "500px",
              objectFit: "cover",
            }}
          />

          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
            <h1 className="fw-bold">
              Latest Electronics
            </h1>

            <p>
              Discover trending gadgets and accessories.
            </p>

            <Link
              href="/products"
              className="btn btn-success"
            >
              Explore
            </Link>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <Image
            src="/next3.jpg"
            alt="Fashion Collection"
            width={1200}
            height={500}
            className="d-block w-100"
            style={{
              height: "500px",
              objectFit: "cover",
            }}
          />

          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
            <h1 className="fw-bold">
              Fashion & Lifestyle
            </h1>

            <p>
              Find styles you'll love every day.
            </p>

            <Link
              href="/products"
              className="btn btn-warning"
            >
              View Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Previous Button */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#nextCartCarousel"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>

        <span className="visually-hidden">
          Previous
        </span>
      </button>

      {/* Next Button */}
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#nextCartCarousel"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>

        <span className="visually-hidden">
          Next
        </span>
      </button>
    </div>
  );
}