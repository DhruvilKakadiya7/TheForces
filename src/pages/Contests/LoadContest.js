import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer';
import Page500 from '../../components/Page500';
import { Box, CircularProgress, Container } from '@mui/material';
import { ShowContests } from '../../components/Contests/ShowContests';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { ProblemPage } from '../../components/Contests/ProblemPage';
import { Contests } from './Contests';

export const LoadContest = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [allTimeData, setData] = useState();
    const [mathJaxRendered, setMathJaxRendered] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const url = `http://localhost:5000/scrap/getData?contestId=${id}`;
        const init = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get(url);
                console.log(data.data);
                setData(data.data);
                setLoading(false);
            } catch (error) {
                setData(null);
                setLoading(false);
            }
        };
        init();
    }, [])

    const checkError = (data) => {
        if (data && data.status !== 400) {
            return (
                <div style={{ textAlign: "left", fontSize: "1.25rem", backgroundColor: "background.default" }}>
                    <ProblemPage
                        data={allTimeData}
                        mathJaxRendered={mathJaxRendered}
                        onMathJaxRendered={() => setMathJaxRendered(true)}
                    />
                </div>
            );
        }
        else {
            navigate('/contests')
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
