import React from 'react'
import {Button, TextField, Typography} from '@mui/material'

const Login = () => {
  return (
    <div>
      <div style={{ margin: "5% auto", textAlign: "center" ,backgroundColor: '#cff4d2', padding:'30px', display:'flex',  flexDirection: "column", maxWidth: '400px'}}>
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
            name="userEmail"
            // onChange={(e) => {
            //   setForm({ ...form, userEmail: e.target.value });
            // }}
          ></TextField>
        </div>
        <br />

        <div>
          <TextField
            placeholder="Password"
            variant="outlined"
            name="userPassword"
            // onChange={(e) => {
            //   setForm({ ...form, userPassword: e.target.value });
            // }}
          ></TextField>
        </div>
        <br />
        <Button color="#f44336" variant="contained" >
          Login
        </Button>

        {/* <Link to={"/signup"}> */}
          <br /> <br />
          {/* to - keyword and /signup is the path in app.jsx */}
          New user? Please Register here
        {/* </Link> */}
      </div>
    </div>
  );
}

export default Login
