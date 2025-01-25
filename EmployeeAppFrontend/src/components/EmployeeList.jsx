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
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosInterceptor";

const EmployeeList = () => {
  const [cardData, setData] = useState([]);

  const navigate = useNavigate();

  const role = sessionStorage.getItem("role");

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
        .delete(`http://localhost:3000/employee/deleteemployee/${id}`)
        .then(() => {
           setData(cardData.filter((item) => item._id !== id));
          alert("Blog deleted successfully!");
          // Remove the deleted blog from the state
           navigate("/employee");
          
        })
        .catch((error) => {
          console.log(error)
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
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {row.employeeName}
                  </Typography>

                  <Typography gutterBottom variant="h5" component="div">
                    Designation: {row.employeeDesignation}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Salary: {row.EmployeeSalary}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Department: {row.employeeDepartment}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Location: {row.employeeLocation}
                  </Typography>
                </CardContent>
                {role === "admin" && (
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
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default EmployeeList;