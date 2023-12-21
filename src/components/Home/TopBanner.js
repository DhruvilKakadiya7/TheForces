import React from 'react';
import useTheme from "@mui/material/styles/useTheme";
import { Box, Typography } from '@mui/material';
import { Fade } from "react-awesome-reveal";
export const TopBanner = () => {
    const theme = useTheme();
    return (
        <Box
            className="top-banner-container"
            sx={{
                width: '100%',
                position: 'relative',
            }}
        >
            <Box
                className="top-banner-bg"
                sx={{
                    width: '100%',
                }}
            >
                <img
                
                    src="https://res.cloudinary.com/dphjmyzx7/image/upload/c_scale,q_auto:good,w_1920/v1641199729/CodeAdda/home_page_background.jpg"
                    alt="background"
                    style={{
                        width: "100%",
                        height: "600px",
                        objectFit: "cover",
                        objectPosition: "center",
                    }}
                />
            </Box>
            <Box
                className="top-banner-content"
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white',
                    textAlign: 'center'
                }}
            >
                <Fade direction='up'>
                    <Typography
                        className='top-banner-title'
                        sx={{
                            fontSize: '4.5rem',
                            [theme.breakpoints.down('sm')]: {
                                fontSize: '2.7rem',
                            },
                            fontWeight: 'bold',
                            marginBottom: '25px'
                        }}
                    >
                        TheForces
                    </Typography>
                </Fade>
                <Fade direction='bottom'>
                    <Typography
                        className='top-banner-description'
                        sx={{
                            maxWidth: '650px',
                        }}
                    >
                        TheForces Rounds are series of educational contests for beginners to masters which are created by a group of CP lovers in the CF community.
                    </Typography>
                </Fade>
            </Box>
        </Box>
    )
}
