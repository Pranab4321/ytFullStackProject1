import React from "react";
import "../index.css";
import { Analytics } from "../components/Analytics";

export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are the best News in Assam.</p>
              <h1>Welcome to News Technical.</h1>
              <p>
                Our news website brings you the latest and most reliable updates
                from around the world. From breaking news and current affairs to
                technology, education, business, and entertainment, we aim to
                keep you informed with accurate and timely reporting. We focus
                on delivering clear, unbiased, and easy-to-understand news so
                readers can stay aware of what’s happening anytime, anywhere.
              </p>

              <button className="btn">Contact Now</button>
              <button className="btn">Learn More</button>
              
            </div>

            <div className="hero-image">
              <img
                src="/images/atHome.jpg"
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
