import React from "react";

import { Fade } from "react-awesome-reveal";
import useTheme from "@mui/material/styles/useTheme";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { WHAT_WE_DO_DATA } from "./HOME_DATA";

function WhatWeDo() {
  const theme = useTheme();
  return (
    <Box className="what-we-do-container" sx={{ mt: 5 }}>
      <Fade direction="up">
        <Typography
          className="what-we-do-title"
          variant="h4"
          gutterBottom
          component="div"
          sx={{
            mb: 3,
            color: "#5D62F9",
            fontSize: "2.8rem",
            fontWeight: "900",
            textAlign: "center",
            letterSpacing: "5px",
            [theme.breakpoints.down("sm")]: {
              fontSize: "2.4rem",
              letterSpacing: "3px",
            },
          }}
        >
          WHAT WE DO
        </Typography>
      </Fade>
      <div className="what-we-do-content">
        <Box
          className="what-we-do-all-box"
          sx={{
            p: 1,
            m: 1,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          <Fade direction="left">
            <WhatWeDoBox box={WHAT_WE_DO_DATA[0]} theme={theme} />
          </Fade>

          <Fade direction="bottom">
            <WhatWeDoBox box={WHAT_WE_DO_DATA[1]} theme={theme} />
          </Fade>

          <Fade direction="right">
            <WhatWeDoBox box={WHAT_WE_DO_DATA[2]} theme={theme} />
          </Fade>

          {/* <Fade direction="right">
            <WhatWeDoBox box={WHAT_WE_DO_DATA[3]} theme={theme} />
          </Fade> */}
        </Box>
      </div>
    </Box>
  );
}

export default WhatWeDo;

function WhatWeDoBox(props) {
  const { theme } = props;
  return (
    <Card
      sx={{
        m: 2,
        width: "300px",
        color: "text.primary",
        bgcolor: "background.default",
        [theme.breakpoints.down("sm")]: {
          width: "270px",
        },
        ...(theme.palette.mode === "light" && {
          borderRadius: "14px",
          background: "linear-gradient(145deg, #f2f2f2, #ffffff)",
          boxShadow: "12px 12px 24px #e6e6e6, -12px -12px 24px #ffffff",
        }),
      }}
    >
      <CardMedia
        component="img"
        height="250"
        image={
          theme.palette.mode === "light"
            ? props.box.imageLink
            : props.box.imageLinkDark
        }
        alt={props.box.imageLabel}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {props.box.title}
        </Typography>
        <hr />
        <Typography variant="body2">{props.box.description}</Typography>
      </CardContent>
    </Card>
  );
}