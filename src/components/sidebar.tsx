import { Divider, Grid, Paper, Typography } from '@material-ui/core'

import Image from 'next/image'
import React from 'react'
import Socials from './socials'

const Sidebar = React.memo(() => {
  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        <Image src="/profPic.jpg" alt="Picture of the author" width={400} height={500} />
      </Grid>
      <Grid container direction="column" item xs={12}>
        <Paper>
          <Grid container direction="column" item xs={12}>
            <Typography align="center">Kyle Hughes </Typography>
            <Typography align="center">
              Full Stack Engineer <Typography />
              <Typography align="center"> Montclair, NJ </Typography>
            </Typography>
            <Divider />
            <Grid container direction="column" justify="center" item xs={12}>
              <Grid item xs={12}>
                <Typography align="center">kyle.hughes025@gmail.com</Typography>
              </Grid>
              <Grid item xs={12}>
                <Socials />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
})

export default Sidebar
