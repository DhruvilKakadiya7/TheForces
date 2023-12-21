import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { RatingGraph } from './RatingGraph';

export const GraphBox = ({ data }) => {
    const [graphData, setGraphData] = useState();
    const [load, setLoad] = useState(false);
    useEffect(() => {
        const init = async () => {
            const history = data.history;
            let temp = [];
            for (let i = 0; i < history.length; i++) {
                let ele = {
                    point: {
                        x: new Date(history[i].startTime * 1000),
                        y: history[i].newRating,
                    },
                    contestName: history[i].name,
                    delta: (history[i].newRating - history[i].previousRating)
                }
                temp.push(ele);
            };
            setGraphData(temp);
            setLoad(true);
        };
        init();
    }, []);
    return (
        <Box
            sx={{
                marginTop: '40px',
                height: 'fit-content',
                width: '100%',
                border: '1px solid',
                borderColor: 'border.profileBox',
                borderRadius: '5px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center'
            }}
        >
            {load ? 
                <RatingGraph graphData={graphData}/>:
                <></>
            }
            
        </Box>
    )
}
