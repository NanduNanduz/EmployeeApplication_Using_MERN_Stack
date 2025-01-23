import { Button, TextField, Typography } from '@mui/material';
import Grid from "@mui/material/Grid2";
import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div
      style={{
        margin: "8%",
        textAlign: "center",
        backgroundColor: "#cff4d2",
        padding: "30px",
      }}
    >
      <Typography variant="h3" style={{ color: "#56c596" }}>
        EmployeeApp Register
      </Typography>
      <br />
      <Grid container spacing={2}>
        <Grid size={{ xs: 6, md: 6 }}>
          <TextField fullWidth label="Name" variant="outlined"></TextField>
        </Grid>
        <Grid size={{ xs: 6, md: 6 }}>
          <TextField fullWidth label="Email" variant="outlined"></TextField>
        </Grid>
        <Grid size={{ xs: 6, md: 6 }}>
          <TextField fullWidth label="Password" variant="outlined"></TextField>
        </Grid>
        <Grid size={{ xs: 6, md: 6 }}>
          <TextField
            fullWidth
            label="Phone Number"
            variant="outlined"
          ></TextField>
        </Grid>

        <Grid size={{ xs: 12, md: 12 }}>
          <TextField
            fullWidth
            label="Address"
            variant="outlined"
            multiline="{4}"
          ></TextField>
        </Grid>
        <Grid size={{ xs: 12, md: 12 }}>
          <Button
            color="black"
            variant="outlined"
            style={{ backgroundColor: "#56c596" }}
          >
            Register
          </Button>
        </Grid>
        <Grid size={{ xs: 12, md: 12 }}>
          <Link to={"/"} style={{ color: "#56c596" }}>
            <br />
            Already registered? Login here
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default Signup
