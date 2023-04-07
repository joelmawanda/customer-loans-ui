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
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    getMetrics();
  }, []);

  const getMetrics = async () => {
    try {
      
      const res = await API.get(`/admin/metrics/http.server.requests`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${user.loggedInUser}`,
        },
      });
      if (res.status === 200) {
        console.log("These are the metrics: ", res.data);
        setMetrics(res.data)
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
            shareholderCount={22975}
            name={"Shareholders"}
          />
        </Grid>
        <Grid item md={3}>
          <ShareholderCard
            icon={<PeopleIcon fontSize="large" sx={{ color: "#FF9E0C" }} />}
            shareholderCount={22975}
            name={"SCD Shareholders"}
          />
        </Grid>
        <Grid item md={3}>
          <ShareholderCard
            icon={<ApartmentIcon fontSize="large" sx={{ color: "#10C682" }} />}
            shareholderCount={22975}
            name={"Company Shareholders"}
          />
        </Grid>
        <Grid item md={3}>
          <ShareholderCard
            icon={<GroupsIcon fontSize="large" sx={{ color: "#D37B13" }} />}
            shareholderCount={22975}
            name={"Foreigner Shareholders"}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdministratorDashboard;
