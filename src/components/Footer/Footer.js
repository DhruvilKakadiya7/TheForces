import React from 'react'

import { Box, Container, Link, Tooltip, Typography } from "@mui/material";
import { LINKS } from './FOOTER_DATA';

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {LINKS.map((link, index) => {
            return <DisplayIcon link={link} key={index} />;
          })}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

export default Footer;

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="/"
      >
        TheForces
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function DisplayIcon(props) {
  const { link } = props;
  if (link.tooltip) {
    return (
      <Tooltip title={link.tooltip}>
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: "5px" }}
        >
          {link.icon}
        </a>
      </Tooltip>
    );
  }
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ marginRight: "5px" }}
    >
      {link.icon}
    </a>
  );
}