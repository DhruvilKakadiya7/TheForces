import { CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'

import LeaderBoard from './LeaderBoard';

var arrangedData = [];
var handles = [];
export const DataTable = ({ data }) => {
    
    const [loading, setLoading] = useState(true);
   
    useEffect(() => {
        const init = () => {
            setLoading(true);
            let title = ["Legendary Grandmaster", "International Grandmaster", "Grandmaster", "International Master", "Master", "Candidate Master", "Expert", "Specialist", "Pupil", "Newbie"];
            let color = ["legendary", "red", "red", "orange", "orange", "violet", "blue", "cyan", "green", "gray"];
            let lowerBound = [3000, 2600, 2400, 2300, 2100, 1900, 1600, 1400, 1200, 0];
            const allData = data;
            let temp = []; 
            for (let i = 0; i < allData.length; i++) {
                let idx = 9;
                for (let j = 9; j >= 0; j--) {
                    if (allData[i].newRating >= lowerBound[j]) {
                        idx = j;
                    }
                }
                let prevIdx = 9;
                for (let j = 9; j >= 0; j--) {
                    if (allData[i].oldRating >= lowerBound[j]) {
                        prevIdx = j;
                    }
                }
                let item = {
                    rank: i + 1,
                    handle: `${allData[i].handle}`,
                    profileUrl: `https://codeforces.com/profile/${allData[i].handle}`,
                    currentRating: allData[i].newRating,
                    contestCount: allData[i].count,
                    delta: allData[i].newRating - allData[i].oldRating,
                    previousRank: allData[i].lastRank,
                    color: color[idx],
                    currentTitle: title[idx],
                    hasChange: (prevIdx !== idx ? title[idx] : null)
                }
                temp.push(item);
                handles.push(allData[i].handle.toLowerCase());
            }
            arrangedData = temp;
            setLoading(false);
        };
        init();
    }, []);
    
    return (
        <>
            <div>
                {loading ?
                    <div style={{ textAlign: "center", fontSize: "1.25rem" }}>
                        <CircularProgress />
                    </div> :
                    <div
                        sx={{
                            width: "100%",
                            height: "100%",
                            color: "text.primary",
                            backgroundColor: "background.default",
                        }}
                    >
                        <LeaderBoard arrangedData={arrangedData} />
                    </div>
                }
            </div>
        </>
    );
}
