import React, { useState } from 'react'
import { Box, Button, CircularProgress, Stack, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import Page500 from '../../components/Page500';

const ColorButton = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: 'gray',
    fontWeight: '600',
    fontSize: '1.4em',
    '&:hover': {
        backgroundColor: '#f8f8f8',
        color: 'black',
    },
}));

export const ProfileSnippet = () => {
    const [value, setValue] = useState('');
    const [search, setSearch] = useState(true);
    const [text, setText] = useState(`ENTER CODEFORCES HANDLE OF USER`);
    const [handle, setHandle] = useState('');
    const navigate = useNavigate();
    const loadData = async () => {
        if (value.toLowerCase().trim().length > 0) {
            setHandle(value.toLowerCase().trim())
            setSearch(false);
            try {
                let { data } = await axios.get(`https://new-theforces-server.onrender.com/profiles/getProfile?handle=${value.toLowerCase().trim()}`);
                if (data.isProfile === "NO") {
                    setText(`${value.toLowerCase().trim()} NOT FOUND !!`)
                    setValue('');
                    setHandle('');
                    setSearch(true);
                }
                else {
                    setText('');
                    setSearch(true);
                    navigate(`/profiles/${value.toLowerCase().trim()}`);
                }
            }
            catch (e) {
                return <Page500/>
            }
        }
        else {
            setText(`ENTER CODEFORCES HANDLE OF USER`);
            setValue('');
            setHandle('');
            navigate('/profiles');
        }
    }

    const keyChecker = (e) => {
        if (e.key === 'Enter') {
            loadData();
        }
    }

    return (
        <>
            <main sx={{
                width: "100%", pb: "0",
                color: "text.primary",
                bgcolor: "background.default",
            }}>
                <Stack
                    spacing={1}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >

                    <TextField
                        id="outlined-basic"
                        label="CF HANDLE"
                        variant="outlined"
                        value={value}
                        onChange={(e) => { setValue(e.target.value) }}
                        onKeyUp={keyChecker}
                    />
                    <ColorButton
                        variant="contained"
                        sx={{ height: '2.5em', width: '2.6em' }}
                        onClick={loadData}
                    >
                        GO!
                    </ColorButton>
                </Stack>
                <Box
                    sx={{
                        height: '100%',
                        width: '100%',
                        marginTop: '50px',
                        alignItems: 'center',
                        alignContent: 'center',
                        textAlign: 'center'
                    }}
                >
                    {search ?
                        <Typography
                            sx={{
                                fontWeight: '700',
                                fontSize: '1.5em',
                                color: 'gray',
                            }}
                        >
                            {text}
                        </Typography> :
                        <CircularProgress />
                    }
                </Box>

            </main>

        </>
    )
}
