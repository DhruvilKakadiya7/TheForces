import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import PAGE500 from "../assets/500.jpg";

function Page500() {
  const theme = useTheme();
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
        <img src={PAGE500} style={{ width: "400px", height: "370px" }} alt="page-500" />
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
          Oops. Server Error.
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

export default Page500;