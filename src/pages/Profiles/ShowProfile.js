import React, { useEffect, useState } from 'react'
import { Box, CircularProgress, Container, Tab, Tabs, Typography } from '@mui/material';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { ProfileBox } from '../../components/Profiles/ProfileBox';
import { GraphBox } from '../../components/Profiles/GraphBox';
import { ContestTable } from '../../components/Profiles/ContestTable';
import { ProfileSnippet } from './ProfileSnippet';
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            sx={{ backgroundColor: "background.default" }}
        >
            {value === index && (
                <Box sx={{ paddingTop: 2, width: "100%", backgroundColor: "background.default" }}>
                    <Typography component={'div'} sx={{ backgroundColor: "background.default" }}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
export const ShowProfile = () => {
    const { handle } = useParams();
    const navigate = useNavigate();
    const [load, setLoad] = useState(true);
    const [mainData, setMainData] = useState(null);
    const [secondaryData, setSecondaryData] = useState(null);
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        const init = async () => {
            try {
                let { data } = await axios.get(`http://localhost:5000/profiles/getProfile?handle=${handle}`);
                if (data.isProfile === "NO") {
                    navigate('/profiles');
                    return;
                }
                setLoad(true);
                data = data.userData;
                setMainData(data);
                data = await axios.get(`https://codeforces.com/api/user.info?handles=${handle}`);
                data = data.data.result[0];
                setSecondaryData(data)
                setLoad(false);
            }
            catch (e) {
                navigate('/page500')
            }
        }
        init();
    }, []);
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: '100vh',
                    overflowY: 'scroll',
                    color: "text.primary",
                    backgroundColor: "background.default",
                }}
            >
                <Container
                    maxWidth="lg"
                    sx={{
                        pt: "25px",
                        pb: "0",
                        color: "text.primary",
                        bgcolor: "background.default",
                    }}
                >
                    <div
                        style={{
                            marginTop: '5px',
                            justifyContent: 'center',
                        }}
                    >
                        {load ?
                            <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                            >
                                <CircularProgress /> 
                            </div>:
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <Tabs
                                    value={value}
                                    onChange={(e, v) => handleChange(e, v)}
                                    centered
                                >
                                    <Tab label="Profile" />
                                    <Tab label="Contest Data" />
                                </Tabs>
                                <TabPanel value={value} index={0}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }}
                                    >
                                        <ProfileBox mainData={mainData} secondaryData={secondaryData} />
                                        <GraphBox data={mainData} />
                                    </div>
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <div>
                                        <ContestTable history={mainData.history} />
                                    </div>
                                </TabPanel>
                            </div>
                        }
                    </div>
                </Container>
                <Footer />
            </Box>
        </>
    )
}
