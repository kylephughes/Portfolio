import 'bootstrap/dist/css/bootstrap.css'

import { Box, Divider, Grid, Paper, Typography } from '@material-ui/core'

import Layout from '../components/layout'
import { Link } from '@material-ui/core'
import React from 'react'
import Sidebar from '../components/sidebar'

const About = () => (
  <Layout>
    <Grid container alignItems="center" item xs={12} md={3}>
      <Sidebar />
    </Grid>
    <Grid
      container
      alignItems="center"
      direction="column"
      item
      xs={12}
      md={8}
      style={{ paddingLeft: 12 }}
    >
      <Grid item xs={12} md={9}>
        <Typography color="textPrimary" variant="h5" component="h5" align="center">
          Software Engineer - Disney Streaming Services
        </Typography>
        <Divider />
        <Typography style={{ paddingTop: 8, paddingBottom: 8 }} color="textPrimary" align="center">
          In my spare time I like to try out new breweries & distilleries around me, follow my sport
          teams and follow the stock market.
        </Typography>
        <Divider />
        <Typography style={{ paddingTop: 8 }} color="textPrimary" align="center">
          Some podcasts I enjoy listening to on my commute are
          <Link href="https://syntax.fm"> Syntax </Link>
          and
          <Link href="https://reactpodcast.simplecast.fm/"> The React Podcast</Link>. Both are great
          ways to pick up new things on the web or in React. Non tech wise I like listening to Mad
          Money with Jim Cramer.
        </Typography>
      </Grid>
    </Grid>
  </Layout>
)

export default About
