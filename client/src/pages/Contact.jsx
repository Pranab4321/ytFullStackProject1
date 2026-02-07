import React from "react";
import "../index.css";

import { useState } from "react";

export const Contact = () => {

  const [user, setUser] = useState({
    username:"",
    email:"",
    message:"",
  });

  const handleInput = (e) =>{
    const name = e.target.name
    const value = e.target.value

    setUser({
      ...user,
      [name] : value
    })
  }

  const hanldeSubmit = (e) =>{
    e.preventDefault();
    console.log(user);
  }

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/images/atContact.jpg"
                  alt="Lets fill the contact form."
                  width="400"
                  height="400"
                />
              </div>

              {/* lets tackle registration form */}

              <div className="registration-form">
                <h1 className="main-heading mb-3">contact form</h1>
                <br />
                <form onSubmit={hanldeSubmit}>

                  <div>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Enter username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="message">Message</label>
                    <input
                      type="textarea"
                      name="message"
                      placeholder="Enter message"
                      id="message"
                      required
                      autoComplete="off"
                      value={user.message}
                      onChange={handleInput}
                    />
                  </div>
                  <br />

                  <button type="submit" className="btn btn-submit">
                    Submit Details
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>

        
        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229224.99023783026!2d91.53807067018715!3d26.143263072127578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5a287f9133ff%3A0x2bbd1332436bde32!2sGuwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1770404391240!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>

    </>
  );
};
