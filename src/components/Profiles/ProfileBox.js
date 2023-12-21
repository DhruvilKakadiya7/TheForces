import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

export const ProfileBox = ({ mainData, secondaryData }) => {
    const [rating, setRating] = useState();
    const [maxRating, setMaxRating] = useState();
    const [maxi, setMaxi] = useState(1400);
    let title = ["legendary grandmaster", "international grandmaster", "grandmaster", "international master", "master", "candidate master", "expert", "specialist", "pupil", "newbie"];
    let titleMain = [
        "Legendary Grandmaster", 
        "International Grandmaster", 
        "Grandmaster", 
        "International Master", 
        "Master", 
        "Candidate Master", 
        "Expert", 
        "Specialist", 
        "Pupil", 
        "Newbie"];
    let color = ["legendary", "red", "red", "orange", "orange", "violet", "blue", "cyan", "green", "gray"];
    useEffect(() => {
        const init = async () => {
            
            let lowerBound = [3000, 2600, 2400, 2300, 2100, 1900, 1600, 1400, 1200, 0];
            let idx = 9;
            for (let j = 9; j >= 0; j--) {
                if (mainData.rating >= lowerBound[j]) {
                    idx = j;
                }
            }
            let prevIdx = 9;
            let maxRating = 1400;
            for (let j = mainData.history.length - 1; j >= 0; j--) {
                maxRating = Math.max(maxRating, mainData.history[j].newRating);
            }
            for (let j = 9; j >= 0; j--) {
                if (maxRating >= lowerBound[j]) {
                    prevIdx = j;
                }
            }
            setMaxi(maxRating);
            setRating(idx);
            setMaxRating(prevIdx);
        }
        init();
    }, []);

    return (
        <Box
            sx={{
                height: 'fit-content',
                width: '100%',
                border: '1px solid',
                borderColor: 'border.profileBox',
                borderRadius: '5px',
                display: 'flex',
                flexDirection: 'row'
            }}
        >
            <Box
                sx={{
                    flex: 1,
                    textAlign: 'left',
                    padding: 1.5,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >

                <Typography
                    className={`rated-user user-${color[rating]}`}
                    sx={{
                        fontWeight: '700',
                        paddingBottom: '0px'
                    }}
                >
                    {titleMain[rating]}
                </Typography>
                <Typography
                    className={`rated-user user-${color[rating]}`}
                    sx={{
                        fontWeight: '700',
                        fontSize: '1.6rem',
                        paddingTop: '0px'
                    }}
                >
                    {`${mainData.handle}`}
                </Typography>
                <ul>
                    <li>
                        <img
                            src='https://codeforces.org/s/35420/images/icons/rating-24x24.png'
                            style={{
                                marginRight: '0.5em',
                                verticalAlign: 'middle',
                                border: 0
                            }}
                        ></img>
                        {`Contest Rating: `}
                        <Typography
                            component={'span'}
                            className={`user-${color[rating]}`}
                            sx={{
                                fontWeight: 'bold'
                            }}
                        >
                            {`${mainData.rating}`}
                        </Typography>
                        {` (max. `}
                        <Typography
                            component={'span'}
                            className={`user-${color[maxRating]}`}
                            sx={{
                                fontWeight: 'bold'
                            }}
                        >
                            {`${title[maxRating]}, ${maxi}`}
                        </Typography>
                        {`)`}
                    </li>
                    <li>
                        <img
                            src='https://codeforces.org/s/35420/images/icons/star_blue_24.png'
                            style={{
                                marginRight: '0.5em',
                                verticalAlign: 'middle',
                                border: 0
                            }}
                        ></img>
                        {`Contribution: `}
                        <Typography
                            component={'span'}
                            sx={{
                                fontWeight: '600',
                                color: `${secondaryData.contribution > 0 ? "text.deltaPositive": "text.deltaNegative"}`
                            }}
                        >
                            {`${secondaryData.contribution > 0 ? "+" : ""}${secondaryData.contribution}`}
                        </Typography>
                    </li>
                    <li>
                        <img
                            src='https://codeforces.org/s/35420/images/icons/star_yellow_24.png'
                            style={{
                                marginRight: '0.5em',
                                verticalAlign: 'middle',
                                border: 0
                            }}
                        ></img>
                        {`Friend of: ${secondaryData.friendOfCount} users`}
                    </li>
                </ul>
            </Box>
            <Box
                sx={{
                    flex: 1,
                    height: 'fit-content',
                    justifyContent: 'center',
                    display: 'flex'
                }}
            >
                <img
                    src={`${secondaryData.titlePhoto}`}
                    alt='profile pic'
                    style={{
                        verticalAlign: 'middle',
                        border: 0,
                        height: '300px',
                        width: '60%',
                        margin: '5px',
                    }}
                ></img>
            </Box>
        </Box>
    )
}
