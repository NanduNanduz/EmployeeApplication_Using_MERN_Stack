// import { Button, TextField, Typography } from '@mui/material';
// import Grid from "@mui/material/Grid2";
// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom';
// import axiosInstance from "../axiosInterceptor";

// const Signup = () => {


// const [form, setForm] = useState({
//   email: "",
//   password: "",
//   confirmPassword: "",
// });
// const [error, setError] = useState("");
// const navigate = useNavigate();

// const handleChange = (e) => {
//   setForm({ ...form, [e.target.name]: e.target.value });
// };


// const handleSubmit = async () => {
//   if (form.password !== form.confirmPassword) {
//     setError("Passwords do not match");
//     return;
//   }
//   try {
//     const response = await axiosInstance.post(
//       "http://localhost:3000/users/adduser",
//       form
//     );
//     alert(response.data);
//     setForm({ email: "", password: "", confirmPassword: "" }); // Reset form
//     navigate("/"); // Navigate to login page
//   } catch (error) {
//     alert("Failed to Signup. Please try again.");
//     console.error(error);
//   }
// };

//   return (
//     <div
//       style={{
//         margin: "8%",
//         textAlign: "center",
//         backgroundColor: "#cff4d2",
//         padding: "30px",
//       }}
//     >
//       <Typography variant="h3" style={{ color: "#56c596" }}>
//         EmployeeApp Register
//       </Typography>
//       <br />
//       <Grid container spacing={2}>
//         <Grid size={{ xs: 6, md: 6 }}>
//           <TextField
//             fullWidth
//             label="Email"
//             variant="outlined"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//           ></TextField>
//         </Grid>
//         <Grid size={{ xs: 6, md: 6 }}>
//           <TextField
//             fullWidth
//             label="Password"
//             variant="outlined"
//             name="password"
//             type="password"
//             value={form.password}
//             onChange={handleChange}
//           ></TextField>
//         </Grid>
//         <Grid size={{ xs: 6, md: 6 }}>
//           <TextField
//             fullWidth
//             label="Confirm Password"
//             variant="outlined"
//             name="confirmPassword"
//             type="password"
//             value={form.confirmPassword}
//             onChange={handleChange}
//           ></TextField>
//         </Grid>size={{ xs: 12, md: 12 }}

//         {error && (
//           <Grid item xs={12}>
//             <Typography
//               color="error"
//               sx={{ textAlign: "center", marginBottom: 2 }}
//             >
//               {error}
//             </Typography>
//           </Grid>
//         )}

//         <Grid >
//           <Button
//             color="black"
//             variant="outlined"
//             style={{ backgroundColor: "#56c596" }}
//             onClick={handleSubmit}
//           >
//             Register
//           </Button>
//         </Grid>
//         <Grid size={{ xs: 12, md: 12 }}>
//           <Link to={"/"} style={{ color: "#56c596" }}>
//             <br />
//             Already registered? Login here
//           </Link>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

// export default Signup



import { Button, TextField, Typography } from "@mui/material";
 import Grid from "@mui/material/Grid2";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../axiosInterceptor";

const Signup = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const response = await axiosInstance.post(
        "http://localhost:3000/users/adduser",
        form
      );
      alert(response.data);
      setForm({ email: "", password: "", confirmPassword: "" }); // Reset form
      navigate("/"); // Navigate to login page
    } catch (error) {
      alert("Failed to Signup. Please try again.");
      console.error(error);
    }
  };

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
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Confirm Password"
              variant="outlined"
              name="confirmPassword"
              type="password"
              value={form.confirmPassword}
              onChange={handleChange}
            />
          </Grid>

          {error && (
            <Grid item xs={12}>
              <Typography
                color="error"
                sx={{ textAlign: "center", marginBottom: 2 }}
              >
                {error}
              </Typography>
            </Grid>
          )}

          <Grid item xs={12}>
            <Button
              variant="contained"
              style={{ backgroundColor: "#56c596", color: "white" }}
              type="submit"
            >
              Register
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Link to={"/"} style={{ color: "#56c596" }}>
              <br />
              Already registered? Login here
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Signup;

