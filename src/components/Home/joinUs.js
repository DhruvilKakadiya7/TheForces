import { Box, Button, Typography, useTheme } from '@mui/material'
import React from 'react'
import { Fade } from 'react-awesome-reveal';
import CodeIcon from "@mui/icons-material/Code";
import DiscordIcon from "../utils/DiscordIcon";

export const JoinUs = () => {
  const theme = useTheme();
  return (
    <Box 
      className = "what-we-do-container"
      sx={{
        mt: 10,
        textAlign: 'center'
      }}
    >
      <Fade direction='bottom'>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Typography
            className='what-we-do-title'
            variant='h4'
            gutterBottom
            component='div'
            sx={{
              mb: 3,
              maxWidth: '800px',
              color: '#5D62F9',
              fontSize: '3.2rem',
              [theme.breakpoints.down("sm")]: {
                fontSize: "2.4rem",
              },
              fontWeight: "900",
              textAlign: "center",
              letterSpacing: "5px",
            }}
          >
            JOIN THE THEFORCES COMMUNITY
          </Typography>
        </div>
      </Fade>
      <Fade direction='bottom'>
        <Box
          sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
        >
          <div style={{ margin: "20px" }}>
            <Button
              variant="contained"
              sx={{
                borderRadius: "25px",
                pl: "20px",
                pr: "20px",
                pt: "10px",
                pb: "10px",
                bgcolor: "#5D62F9",
              }}
              href="https://codeforces.com/group/XrvsTsJWMb/join"
              target="_blank"
              endIcon={<CodeIcon />}
            >
              Join Codeforces Group
            </Button>
            
          </div>
          <div style={{ margin: "20px" }}>
            <Button
              sx={{
                border: "1px solid",
                borderColor: "#5D62F9",
                borderRadius: "25px",
                pl: "20px",
                pr: "20px",
                pt: "10px",
                pb: "10px",
              }}
              href="https://discord.gg/h9N2vGmwep"
              target="_blank"
              endIcon={<DiscordIcon />}
            >
              Join Discord
            </Button>
          </div>
        </Box>
      </Fade>
    </Box>
  )
}
