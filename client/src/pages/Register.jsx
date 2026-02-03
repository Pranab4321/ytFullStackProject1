import React from "react";

export const Register = () => {
  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/images/atRegistration.webp"
                  alt="Photo showing News poster"
                  width="400"
                  height="400"
                />
              </div>

              {/* lets tackle registration form */}

              <div className="registration-form">
                <h1 className="main-heading mb-3">registration form</h1>
                <br />
                <form>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Enter username"
                      id="username"
                      required
                      autocomplete="off"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="Enter phone"
                      id="phone"
                      required
                      autocomplete="off"
                    />
                  </div>

                  <div>
                    <label htmlFor="email">username</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      id="email"
                      required
                      autocomplete="off"
                    />
                  </div>

                  <div>
                    <label htmlFor="password">username</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      id="password"
                      required
                      autocomplete="off"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
