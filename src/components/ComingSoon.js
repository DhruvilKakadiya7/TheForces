import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import DarkComingSoon from "../assets/darkComingSoon.svg";
import LightComingSoon from "../assets/comingsoon.svg"
function ComingSoon() {
  const theme = useTheme();
  const [picture, setPicture] = useState(LightComingSoon);
  useEffect(()=>{
    const init = ()=> {
        (theme.palette.mode === "dark" ? setPicture(DarkComingSoon) : setPicture(LightComingSoon));
    }
    init();
  }, [theme.palette.mode]);
  return (
    <Grid
      sx={{
        flex: "auto",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        bgcolor: "background.default",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          bgcolor: "background.default",
        }}
      >
        <img src={picture} style={{ width: "80%", height: '50vh'}} alt="page-404" />
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "3rem",
            textAlign: "center",
            [theme.breakpoints.down("sm")]: {
              fontSize: "2rem",
            },
            color: "text.primary",
          }}
        >
          Coming Soon!
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: "25px",
            borderRadius: "25px",
            pl: "20px",
            pr: "20px",
            pt: "10px",
            pb: "10px",
          }}
          href="/"
        >
          Go back to home
        </Button>
      </Box> 
    </Grid>
  );
}

export default ComingSoon;
