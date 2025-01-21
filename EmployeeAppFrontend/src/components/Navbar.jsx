import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react'
import Link from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar style={{ backgroundColor: "brown" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              EmployeeApp
            </Typography>

            <Link to={"/employees"}>
              <Button style={{ color: "white" }}>HOME</Button>{" "}
            </Link>
            <Link to={"/addemployees"}>
              <Button style={{ color: "white" }}>ADDEMPLOYEE</Button>
            </Link>
            <Link to={"/"}>
              <Button style={{ color: "white" }} onClick={handleLogout}>
                LOGOUT
              </Button> 
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar
