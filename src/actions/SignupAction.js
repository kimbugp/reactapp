import axios from "axios";
import signin from './LoginAction';

const signup = props => {
  let user = {
    'username': props.username,
    'password': props.password,
    'email': props.email,
    'name': props.name
  };
  axios
    .post("https://simondb.herokuapp.com/api/v1/auth/signup", user)
    .then(response => {
      if (response.status===200) {
        return signin(props);
      }
    })
    .catch(error => {
      console.log(error);
    });
};

export default signup;
