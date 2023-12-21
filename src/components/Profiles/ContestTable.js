import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MakeTable from './MakeTable';

export const ContestTable = ({ history }) => {
    const [userData, setuserData] = useState();
    const [load, setLoad] = useState(true);
    useEffect(() => {
        const init = async () => {
            let temp = [];
            for (let i = history.length - 1; i >= 0; i--) {
                let title = ["Legendary Grandmaster", "International Grandmaster", "Grandmaster", "International Master", "Master", "Candidate Master", "Expert", "Specialist", "Pupil", "Newbie"];
                let color = ["legendary", "red", "red", "orange", "orange", "violet", "blue", "cyan", "green", "gray"];
                let lowerBound = [3000, 2600, 2400, 2300, 2100, 1900, 1600, 1400, 1200, 0];
                let myDate = new Date(history[i].startTime * 1000);
                myDate = myDate.toLocaleString();
                myDate = myDate.split(',')[0];
                let splitedDate = myDate.split('/');
                myDate = splitedDate[1] + "/" + splitedDate[0] + "/" + splitedDate[2];
                let idx = 9;
                for (let j = 9; j >= 0; j--) {
                    if (history[i].newRating >= lowerBound[j]) {
                        idx = j;
                    }
                }
                let prevIdx = 9;
                for (let j = 9; j >= 0; j--) {
                    if (history[i].previousRating >= lowerBound[j]) {
                        prevIdx = j;
                    }
                }
                let obj = {
                    num: history.length - i,
                    name: history[i].name,
                    date: myDate,
                    newRating: history[i].newRating,
                    delta: (history[i].newRating - history[i].previousRating),
                    rank: history[i].rank,
                    color: color[idx],
                    hasChange: (prevIdx !== idx ? title[idx] : null)
                }
                temp.push(obj);
            }
            setuserData(temp);
            setLoad(false);
        }
        init();

    }, [])
    return (
        <div
            style={{
                marginTop: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >
            {load ? 
                <></> :
                <MakeTable userData={userData} />
            }
        </div>
    )
}
