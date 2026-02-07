import React from "react";
import "./Analytics.css";

export const Analytics = () => {
  return (
    <section id="analytics-page">
      <div className="cont">
        
        <h1>Analytics Overview</h1>
        <p className="subtitle">
          A quick look at our platform’s growth and reader engagement.
        </p>

        <div className="stats-grid">
          
          <div className="stat-card">
            <h2>120K+</h2>
            <p>Monthly Readers</p>
          </div>

          <div className="stat-card">
            <h2>5K+</h2>
            <p>Articles Published</p>
          </div>

          <div className="stat-card">
            <h2>35+</h2>
            <p>News Categories</p>
          </div>

          <div className="stat-card">
            <h2>99%</h2>
            <p>Uptime Reliability</p>
          </div>

        </div>

        <div className="analytics-info">
          <h2>What These Numbers Mean</h2>
          <p>
            Our analytics reflect a growing community of readers who trust us
            for timely and accurate news. We continuously monitor performance
            to improve content quality and user experience.
          </p>
        </div>

      </div>
    </section>
  );
};
