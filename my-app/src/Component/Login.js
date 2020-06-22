import React, { useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const Login = () => {
  state = {
    credential: {
      name: "",
      password: ""
    },
    isLoading: false
  };
  const handleChange = e => {
    //useEffect({
    axiosWithAuth()
      .post("", this.state.credentials)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    //}, [])

    e.preventDefault();
    setLogin({
      ...Login,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLogin();
  };

  return (
    <>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input name="name" type="text" onChange={handleChange} value={} />
        </label>
        <label>
          <input name="password" type="text" onChange={handleChange} value={} />
        </label>
      </form>
    </>
  );
};
