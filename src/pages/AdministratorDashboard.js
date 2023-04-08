import ApartmentIcon from "@mui/icons-material/Apartment";
import GroupsIcon from "@mui/icons-material/Groups";
import PeopleIcon from "@mui/icons-material/People";
import { Box, Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShareholderCard from "../components/AdministratorDashboard/ShareholderCard";
import MenuAppBar from "../components/navigation/AppBar";
import API from "../config/API";
import NavigationContext from "../store/NavigationContext";

const AdministratorDashboard = () => {
  const navigationContext = useContext(NavigationContext);
  const { sidebar } = navigationContext;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [measurements, setMeasurements] = useState([]);
  const [availableTags, setAvailableTags] = useState([]);

  useEffect(() => {
    getMetrics();
  }, []);

  const token = localStorage.getItem("token");

  const getMetrics = async () => {
    try {
      const res = await API.get(`/admin/metrics/http.server.requests`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        console.log(
          "These are the metrics availableTags: ",
          res.data.availableTags
        );
        console.log("----------------------------------------------");
        console.log(
          "These are the metrics measurements: ",
          res.data.measurements
        );
        console.log("----------------------------------------------");
        console.log("These are the metrics availableTags: ");
        res.data.availableTags.forEach((availableTag) => {
          console.log(availableTag.tag + ":" + availableTag.values);
        });
        console.log("----------------------------------------------");
        console.log("These are the metrics measurements: ");
        res.data.measurements.forEach((measurement) => {
          console.log(measurement.statistic + ":" + measurement.value);
        });
        setAvailableTags(res.data.availableTags);
        setMeasurements(res.data.measurements);

        console.log("Weeeee", measurements[0].value);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <MenuAppBar />
      <Grid
        container
        spacing={2}
        sx={{ marginLeft: "5px", marginRight: "10px", marginTop: "20px" }}
      >
        <Grid item md={3}>
          <ShareholderCard
            icon={<GroupsIcon fontSize="large" sx={{ color: "#01422A" }} />}
            shareholderCount={measurements[0]?.value ?? 0}
            name={"Number of Requests"}
          />
        </Grid>
        <Grid item md={3}>
          <ShareholderCard
            icon={<PeopleIcon fontSize="large" sx={{ color: "#FF9E0C" }} />}
            shareholderCount={22975}
            name={"Number of failed validations"}
          />
        </Grid>
        <Grid item md={3}>
          <ShareholderCard
            icon={<ApartmentIcon fontSize="large" sx={{ color: "#10C682" }} />}
            shareholderCount={22975}
            name={"Number of Positive Requests"}
          />
        </Grid>
        <Grid item md={3}>
          <ShareholderCard
            icon={<GroupsIcon fontSize="large" sx={{ color: "#D37B13" }} />}
            shareholderCount={22975}
            name={"Number of Negative Requests"}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdministratorDashboard;
