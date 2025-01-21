import { Button, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import axiosInstance from "../axiosInterceptor";

const AddEmployee = () => {
  const [employeeData, setData] = useState({
    blogTitle: "",
    blogImageUrl: "",
    blogDescription: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  function addBlog() {
    if (location.state != null) {
      axiosInstance
        .put(
          "http://localhost:3000/employee/editemployee/" + location.state.val._id,
          employeeData
        )
        .then((res) => {
          alert(res.data.message);
          navigate("/employees");
        });
    } else {
      axiosInstance
        .post("http://localhost:3000/employee/addemployee", employeeData)
        .then((res) => {
          alert("Blog added");
          // console.log(res)
          navigate("/employees");
          //home page url '/blogs' in app.jsx
        });

      // .catch((error)=>{
      //   alert('blog not added')
      // })
    }
  }

  // while the page loading the data should be filled (for update only)- use useEffect
  // useLocation -  for to access the data that passed with the navigate through state

  useEffect(() => {
    if (location.state != null) {
      setData({
        ...employeeData,
        blogTitle: location.state.val.blogTitle,
        blogDescription: location.state.val.blogDescription,
        blogImageUrl: location.state.val.blogImageUrl,
      });
    } else {
      setData({
        ...employeeData,
        blogTitle: "",
        blogDescription: "",
        blogImageUrl: "",
      });
    }
  }, []);

  return (
    <div>
      <div style={{ margin: "8%", textAlign: "center" }}>
        <Typography variant="h3" style={{ color: "Brown" }}>
          Add Blog
        </Typography>
        <br />
        <Grid container spacing={2}>
          <Grid size={{ xs: 6, md: 6 }}>
            <TextField
              fullWidth
              label="Title"
              variant="outlined"
              name="blogTitle"
              value={employeeData.blogTitle}
              onChange={(e) => {
                setData({ ...employeeData, blogTitle: e.target.value });
              }}
            ></TextField>
          </Grid>

          <Grid size={{ xs: 6, md: 6 }}>
            <TextField
              fullWidth
              label="Image Url"
              variant="outlined"
              name="blogImageUrl"
              value={employeeData.blogImageUrl}
              onChange={(e) => {
                setData({ ...employeeData, blogImageUrl: e.target.value });
              }}
            ></TextField>
          </Grid>
          <Grid size={{ xs: 12, md: 12 }}>
            <TextField
              fullWidth
              label="Description"
              variant="outlined"
              name="blogDescription"
              value={employeeData.blogDescription}
              onChange={(e) => {
                setData({ ...employeeData, blogDescription: e.target.value });
              }}
            ></TextField>
          </Grid>

          <Grid size={{ xs: 12, md: 12 }}>
            <Button color="secondary" variant="outlined" onClick={addBlog}>
              Add blog
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AddEmployee;
