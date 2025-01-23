import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosInterceptor";

const EmployeeList = () => {
  const [cardData, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // '/blogs' - in the get of blog routes
    axiosInstance
      .get("http://localhost:3000/employee/employees")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //instead of row using parameter val
  function update_data(val) {
    // passing data to the add blogs page using val parameter
    // state key word work as a prop to pass data with navigate
    navigate("/addemployees", { state: { val } });
  }

  // Delete a blog
  const deleteEmployee = (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      axiosInstance
        .delete(`/employee/deleteemployee/${id}`)
        .then((res) => {
          alert("Blog deleted successfully!");
          // Remove the deleted blog from the state
          setData((prevData) => prevData.filter((employee) => employee._id !== id));
        })
        .catch((error) => {
          console.error("Error deleting blog:", error);
          alert("Failed to delete the blog.");
        });
    }
  };

  return (
    <div>
      <div style={{ margin: "5%" }}>
        <Grid container spacing={2}>
          {/* row - represent each items in the array and also the arrow fun start with '()' in the react not '{}'  */}
          {cardData.map((row) => (
            <Grid size={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={row.blogImageUrl}

                  // data binding
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {row.blogTitle}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {row.blogDescription}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="warning"
                    variant="contained"
                    onClick={() => {
                      update_data(row);
                    }}
                  >
                    {/* update_data is the fun name and row is the data of each card  */}
                    Update
                  </Button>
                  <Button
                    size="small"
                    color="error"
                    variant="contained"
                    onClick={() => deleteEmployee(row._id)}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default EmployeeList;
