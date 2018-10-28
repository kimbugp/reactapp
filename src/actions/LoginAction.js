import axios from "axios";
import React from "react";

const signin = (props, display) => {
  let user = { username: props.username, password: props.password };
  axios
    .post("https://simondb.herokuapp.com/api/v1/auth/login", user)
    .then(response => {
      let auth = response.data;
      if (auth.Token) {
        sessionStorage.setItem("Token", auth.Token);
        window.location.href = "/";
      }
    })
    .catch(error => {
      const Loader = () => <Loader style={display} />;

      console.log(error);
    });
};

export default signin;
