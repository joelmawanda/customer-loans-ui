import ApartmentIcon from "@mui/icons-material/Apartment";
import GroupsIcon from "@mui/icons-material/Groups";
import PeopleIcon from "@mui/icons-material/People";
import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ShareholderCard from "../components/AdministratorDashboard/ShareholderCard";
import MenuAppBar from "../components/navigation/AppBar";
import API from "../config/API";

const AdministratorDashboard = () => {
  // const [numberOfRequests, setNumberOfRequests] = useState();
  // const [validations, setValidations] = useState([]);
  // const [status, setStatus] = useState([]);
  // const [numberOfFaildeValidations, setNumberOfFaildeValidations] = useState();
  // const [numberOfPositiveRequests, setNumberOfPositiveRequests] = useState();
  // const [numberOfNegativeRequests, setNumberOfNegativeRequests] = useState();

  const token = localStorage.getItem("token");

  // useEffect(() => {
  //   getMetrics();
  // }, []);

  // useEffect(() => {
  //   let faildeValidations = validations.filter(function (value) {
  //     return value !== "SUCCESS";
  //   });
  //   setNumberOfFaildeValidations(faildeValidations.length);
  // }, [validations]);

  // useEffect(() => {
  //   let positiveRequests = status.filter(function (value) {
  //     return value == "200";
  //   });

  //   setNumberOfPositiveRequests(positiveRequests.length);
  // }, [status]);

  // useEffect(() => {
  //   let negativeRequests = status.filter(function (value) {
  //     return value !== "200";
  //   });
  //   setNumberOfNegativeRequests(negativeRequests.length);
  // }, [status]);

  // const getMetrics = async () => {
  //   try {
  //     const res = await API.get(`/admin/metrics/http.server.requests?tag=method:GET&tag=uri:/api/v1/loans/status`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     if (res.status === 200) {
  //       console.log("The metrics: ", res.data.measurements[0].value);
  //       setNumberOfRequests(res.data.measurements[0].value);
  //       setValidations(res.data.availableTags[2].values);
  //       setStatus(res.data.availableTags[3].values);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const [numRequests, setNumRequests] = useState(0);
  const [numFailedValidations, setNumFailedValidations] = useState(0);
  const [numPositiveRequests, setNumPositiveRequests] = useState(0);
  const [numNegativeRequests, setNumNegativeRequests] = useState(0);

  useEffect(() => {
    getMetrics();
  }, []);

  const getMetrics = async () => {
    let response;
    try {
      response = await API.get(
        `/admin/metrics/http.server.requests?tag=method:GET&tag=uri:/api/v1/loans/status`,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        const data = response.data;
        //Loop through the available tags to update the metrics
        data.availableTags.forEach((tag) => {
          switch (tag.tag) {
            case "outcome":
              tag.values.forEach((outcome) => {
                switch (outcome) {
                  case "SUCCESS":
                    setNumPositiveRequests(numPositiveRequests + 1);
                    break;
                  case "CLIENT_ERROR":
                    setNumNegativeRequests(numNegativeRequests + 1);
                    break;
                  default:
                    break;
                }
              });
              break;
            default:
              break;
          }
        });

        // Update the number of requests
        setNumRequests(data.measurements[0].value);
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
            // shareholderCount={numberOfRequests}
            shareholderCount={numRequests}
            name={"Number of Requests"}
          />
        </Grid>
        <Grid item md={3}>
          <ShareholderCard
            icon={<PeopleIcon fontSize="large" sx={{ color: "#FF9E0C" }} />}
            // shareholderCount={numberOfFaildeValidations}
            shareholderCount={numFailedValidations}
            name={"Number of failed validations"}
          />
        </Grid>
        <Grid item md={3}>
          <ShareholderCard
            icon={<ApartmentIcon fontSize="large" sx={{ color: "#10C682" }} />}
            // shareholderCount={numberOfPositiveRequests}
            shareholderCount={numPositiveRequests}
            name={"Number of Positive Requests"}
          />
        </Grid>
        <Grid item md={3}>
          <ShareholderCard
            icon={<GroupsIcon fontSize="large" sx={{ color: "#D37B13" }} />}
            // shareholderCount={numberOfNegativeRequests}
            shareholderCount={numNegativeRequests}
            name={"Number of Negative Requests"}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdministratorDashboard;
