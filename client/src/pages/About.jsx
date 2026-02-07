import React from "react";
import "../index.css";
import { Analytics } from "../components/Analytics";

export const About = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <h1>About Us</h1>

              <p>
                We are a digital news platform committed to delivering accurate,
                timely, and reliable information. Our focus is on keeping
                readers informed with clear and unbiased reporting.
              </p>

              <h2>Our Vision</h2>
              <p>
                To provide trustworthy news that helps people understand the
                world better and stay connected to current events.
              </p>

              <h2>What We Cover</h2>
              <p>
                We bring you updates on national and international news,
                technology, business, entertainment, and trending topics — all
                in one place.
              </p>

              <h2>Contact Us</h2>
              <p>
                For feedback, suggestions, or inquiries, please visit our
                contact page.
              </p>

              <button className="btn">Contact Now</button>
              <button className="btn">Learn More</button>
            </div>

            <div className="hero-image">
              <img
                src="/images/atAbout.jpg"
                alt="Image for the home page"
                width="400"
                height="400"
              />
            </div>
          </div>
        </section>
      </main>

      <Analytics/>
    </>
  );
};
