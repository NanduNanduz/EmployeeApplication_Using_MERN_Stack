import React, { useState } from 'react'
import {Button, TextField, Typography} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Login = () => {

  
  const [form, setForm] = useState({
    userEmail: "",
    userPassword: "",
  });

  const navigate = useNavigate();

  function capValue() {
    // console.log(form);
    // (give the backend port no: and backend url) redirection url - app.js/index.js)
    axios
      .post("http://localhost:3000/users/login", form)
      .then((res) => {
        console.log(res);
        alert(res.data.message);
        // blogs is given in the route of app.jsx - frontend
        //if token is with the data then it is save to the frontend
        if (res.data.token) {
          sessionStorage.setItem("logintoken", res.data.token);
          //if loken is generated it will navigate to blogs page
          navigate("/employees");
        } else {
          //otherwise prohibited (stay there it self)
          navigate("/");
        }
      })
      .catch((error) => {
        alert("Invalid Login");
      });
  }





  return (
    <div>
      <div
        style={{
          margin: "5% auto",
          textAlign: "center",
          backgroundColor: "#cff4d2",
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          maxWidth: "400px",
        }}
      >
        <Typography variant="h3" style={{ color: "#56c596" }}>
          EmployeeApp Login
        </Typography>
        <br />
        <br />
        <div>
          {/* for to capture data need to write onChange event   and any change in the field is setting to the 2nd var in useState*/}
          {/* spread operator used to concatenate new value  */}
          <TextField
            placeholder="Email"
            variant="outlined"
            name="email"
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
            }}
          ></TextField>
        </div>
        <br />

        <div>
          <TextField
            placeholder="Password"
            variant="outlined"
            name="password"
            onChange={(e) => {
              setForm({ ...form, password: e.target.value });
            }}
          ></TextField>
        </div>
        <br />
        <Button
          color="black"
          variant="contained"
          onClick={capValue}
          style={{ backgroundColor: "#56c596" }}
        >
          Login
        </Button>

        <Link to={"/signup"} style={{ color: "#56c596" }}>
          <br /> <br />
          {/* to - keyword and /signup is the path in app.jsx */}
          New user? Please Register here
        </Link>
      </div>
    </div>
  );
}

export default Login
