import React, { useState } from 'react'
import Footer from '../../components/Footer/Footer';
import Page500 from '../../components/Page500';
import { Box, CircularProgress, Container } from '@mui/material';
import { ShowContests } from '../../components/Contests/ShowContests';
import { data } from '../../components/Contests/contestData';

export const Contests = () => {
    const [loading, setLoading] = useState(false);
    const [allTimeData, setData] = useState(data);


    const checkError = (data) => {
        if (data && data.status !== 400) {
            return (
                <div style={{ textAlign: "center", fontSize: "1.25rem", backgroundColor: "background.default" }}>
                    <ShowContests/>
                </div>
            );
        }
        else {
            return (
                <Page500 />
            );
        }
    }

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
                    <main sx={{
                        width: "100%", pb: "0",
                        color: "text.primary",
                        bgcolor: "background.default",
                    }}>
                        {loading ?
                            <div style={{ textAlign: "center", fontSize: "1.25rem" }}>
                                <CircularProgress />
                            </div> :
                            checkError(allTimeData)
                        }

                    </main>
                </Container>
                <Footer />

            </Box>
        </>
    )
}
