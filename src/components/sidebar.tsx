import { Divider, Grid, Typography } from '@mui/material'

import Image from 'next/image'
import React from 'react'
import Socials from './socials'

const Sidebar = React.memo(() => {
  return (
    <Grid container alignItems="center" direction="column" item>
      <Grid item>
        <Image src="/profpic.png" alt="profile" width={400} height={500} />
      </Grid>
      <Grid container direction="column" item xs={8} md={12}>
        <Grid container direction="column" item>
          <Typography color="textPrimary" align="center">
            Kyle Hughes
          </Typography>
          <Typography color="textPrimary" align="center">
            Software Engineer
          </Typography>
          <Typography color="textPrimary" align="center">
            Westwood, NJ
          </Typography>
          <Divider />
          <Grid
            container
            style={{ paddingTop: 8 }}
            direction="column"
            justifyContent="center"
            item
            xs={12}
          >
            <Grid item xs={12}>
              <Typography color="textPrimary" align="center">
                kyle.hughes025@gmail.com
              </Typography>
            </Grid>
            <Grid container wrap="nowrap" item xs={12}>
              <Socials />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
})

export default Sidebar
