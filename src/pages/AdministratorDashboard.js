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
  const [measurements, setMeasurements] = useState();
  const [availableTags, setAvailableTags] = useState([]);
  const [validations, setValidations] = useState([]);
  const [status, setStatus] = useState([]);
  const [numberOfFaildeValidations, setNumberOfFaildeValidations] = useState();
  const [numberOfPositiveRequests, setNumberOfPositiveRequests] = useState();
  const [numberOfNegativeRequests, setNumberOfNegativeRequests] = useState();

  const token = localStorage.getItem("token");

  useEffect(() => {
    getMetrics();
  }, []);

  useEffect(() => {
    let faildeValidations = validations.filter(function (value) {
      return value !== "SUCCESS";
    });
    setNumberOfFaildeValidations(faildeValidations.length);
  }, [validations]);

  useEffect(() => {
    let positiveRequests = status.filter(function (value) {
      return value == "200";
    });

    setNumberOfPositiveRequests(positiveRequests.length);
  }, [status]);

  useEffect(() => {
    let negativeRequests = status.filter(function (value) {
      return value !== "200";
    });
    setNumberOfNegativeRequests(negativeRequests.length);
  }, [status]);

  const getMetrics = async () => {
    try {
      const res = await API.get(`/admin/metrics/http.server.requests?tag=method:GET&tag=uri:/api/v1/loans/status`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        setAvailableTags(res.data.availableTags);
        setMeasurements(res.data.measurements[0].value);
        setValidations(res.data.availableTags[4].values);
        setStatus(res.data.availableTags[5].values);
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
            shareholderCount={measurements}
            name={"Number of Requests"}
          />
        </Grid>
        <Grid item md={3}>
          <ShareholderCard
            icon={<PeopleIcon fontSize="large" sx={{ color: "#FF9E0C" }} />}
            shareholderCount={numberOfFaildeValidations}
            name={"Number of failed validations"}
          />
        </Grid>
        <Grid item md={3}>
          <ShareholderCard
            icon={<ApartmentIcon fontSize="large" sx={{ color: "#10C682" }} />}
            shareholderCount={numberOfPositiveRequests}
            name={"Number of Positive Requests"}
          />
        </Grid>
        <Grid item md={3}>
          <ShareholderCard
            icon={<GroupsIcon fontSize="large" sx={{ color: "#D37B13" }} />}
            shareholderCount={numberOfNegativeRequests}
            name={"Number of Negative Requests"}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdministratorDashboard;
