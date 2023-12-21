import { Box, Button, Tab, Tabs, Typography, makeStyles, useMediaQuery } from '@mui/material'
// import {makeStyle} from '@mui/style'
import React, { useState } from 'react'
import Problem from './ProblemTabs';
import { useTheme } from '@emotion/react';
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

// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     tabs: {
//       [theme.breakpoints.down('sm')]: {
//         flexDirection: 'column',
//       },
//       flexWrap: 'wrap', // Allow tabs to wrap onto the next line
//     },
//   }));
export const ProblemPage = ({ data, mathJaxRendered, onMathJaxRendered }) => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    // const classes = useStyles();

    return (
        <div style={{
            width: "100%",
            height: "100%",
            color: "text.primary",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: "background.default",
            flexGrow: 1,
            maxWidth: '100%'
        }}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="problem Tabs"
                variant="scrollable"
                scrollButtons="auto"
            >
                {data.problems?.map((obj, idx) => {
                    return (
                        <Tab
                            fontSize={'1.4rem'}
                            key={idx}
                            label={String.fromCharCode(65 + idx)}
                            sx={{
                                maxWidth: '100%',
                                overflowX: 'auto',
                            }}
                            variant={isMobile ? 'scrollable' : 'standard'}
                            scrollButtons="auto"
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
