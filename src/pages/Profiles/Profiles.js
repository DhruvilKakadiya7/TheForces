import React from 'react'
import { Box, Container} from '@mui/material';
import Footer from '../../components/Footer/Footer';
import { ProfileSnippet } from './ProfileSnippet';

export const Profiles = () => {
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
          <ProfileSnippet/>
        </Container>
        <Footer />
      </Box>
    </>
  )
}
