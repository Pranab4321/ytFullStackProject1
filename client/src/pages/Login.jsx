import React from "react";
import "../index.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const URL="http://localhost:5000/api/auth/login"

export const Login = () => {

  const [user, setUser] = useState({
    email:"",
    password:"",
  });

  const handleInput = (e) =>{
    const name = e.target.name
    const value = e.target.value

    setUser({
      ...user,
      [name] : value
    })
  }

const navigate = useNavigate();
const {storeTokenInLS} = useAuth();

  const hanldeSubmit = async (e) =>{
    e.preventDefault();
    // console.log(user);
    try {
      const response= await fetch(URL,{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user),

      })
      if(response.ok){
        alert("Login Successful");
        const res_data = await response.json();
        storeTokenInLS(res_data.token);

        setUser({email:"",password:""});
        navigate("/");
      }else{
        alert("Invalid Credentials");
        console.log("Invalid credentials")
      }
      console.log("login form: ",response);

    } catch (error) {
      console.log(error);
    }


  }

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/images/atLogin.jpg"
                  alt="Lets fill the login form."
                  width="400"
                  height="400"
                />
              </div>

              {/* lets tackle registration form */}

              <div className="registration-form">
                <h1 className="main-heading mb-3">login form</h1>
                <br />
                <form onSubmit={hanldeSubmit}>

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
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <br />

                  <button type="submit" className="btn btn-submit">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
