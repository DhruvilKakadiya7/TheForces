import { Box, Button, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import Problem from './Problem.js';
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
export const ProblemPage = ({ data, mathJaxRendered, onMathJaxRendered }) => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div style={{
            width: "100%",
            height: "100%",
            color: "text.primary",
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: "background.default",
        }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                {data.problems?.map((obj, idx) => {
                    return (
                        <Tab
                            fontSize={'1.4rem'}
                            key={idx}
                            label={String.fromCharCode(65 + idx)}
                        />
                    );
                })}
            </Tabs>
            {data.problems?.map((obj, idx) => {
                return (
                    <TabPanel value={value} index={idx}>
                        <Problem problem={data.problems[idx]} onMathJaxRendered={onMathJaxRendered} mathJaxRendered={mathJaxRendered} />
                        <div style={{
                            justifyContent: 'center',
                            display: 'flex'
                        }}>
                            <Button variant="contained">
                                <Typography
                                    component="a"
                                    sx={{ fontSize: '1em', color: "text.default" }}
                                    className={`sub-button`}
                                    href={`https://codeforces.com/gym/${data.contestId}`}
                                    target='_blank'
                                >
                                    Submit
                                </Typography>
                            </Button>
                        </div>
                    </TabPanel>
                );
            })}
        </div>
    )
}
