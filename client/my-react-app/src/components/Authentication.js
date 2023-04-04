
import React from "react"
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

export default function Authentication (props) {

        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
      
        const handleSubmit = (e) => {
          e.preventDefault()};

          const requestBody = {
            username,
            password,
          };
          fetch("`http://localhost:8080/login/{username}/{password}", {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(requestBody),
          })
         
        
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
  }