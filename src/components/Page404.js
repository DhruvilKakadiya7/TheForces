import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import PAGE404 from "../assets/404.svg";

function Page404() {
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
        <img src={PAGE404} style={{ width: "70%", maxWidth: "600px" }} alt="page-404" />
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
          Oops. Page not found.
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

export default Page404;
