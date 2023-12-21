import { Grid } from '@mui/material'
import React from 'react'
import { TopBanner } from '../../components/Home/TopBanner'
import WhatWeDo from '../../components/Home/WhatWeDo'
import { JoinUs } from '../../components/Home/joinUs'
import Footer from '../../components/Footer/Footer'
export const Home = () => {
  return (
    <Grid
        sx={{
            bgcolor: 'background.default'
        }}
    >
        <TopBanner/>
        <WhatWeDo/>
        <JoinUs/>
        <Footer/>
    </Grid>
  )
}
