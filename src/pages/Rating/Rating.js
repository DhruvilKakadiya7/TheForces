import React, { useEffect, useState } from 'react'
import Page500 from '../../components/Page500'
import { Box, CircularProgress, Container } from '@mui/material';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';
import { DataTable } from '../../components/Ratings/DataTable';

export const Rating = () => {

    const [loading, setLoading] = useState(false);
    const [allTimeData, setData] = useState(null);


    const checkError = (data) => {
        if (data && data.status !== 400) {
            return (
                <div style={{ textAlign: "center", fontSize: "1.25rem", backgroundColor: "background.default" }}>
                    <DataTable data={data} />
                </div>
            );
        }
        else {
            return (
                <Page500 />
            );
        }
    }

    useEffect(() => {
        const url = 'https://new-theforces-server.onrender.com/profiles/getLeaderBoard';
        const init = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get(url);
                setData(data.data);
                setLoading(false);
            } catch (error) {
                setData(null);
                setLoading(false);
            }
        };
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
