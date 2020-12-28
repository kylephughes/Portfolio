import 'bootstrap/dist/css/bootstrap.css'

import { Grid, Paper, Typography } from '@material-ui/core'

import Layout from '../components/layout'
import React from 'react'

const Blog = () => (
  <Layout>
    <Grid direction="column" container item>
      <Grid item>
        <Typography align="center" color="textPrimary" variant="h5">
          Eventually will be sharing my experiences
        </Typography>
      </Grid>
      <Grid item>
        <Typography align="center" color="textPrimary">
          More to follow...
        </Typography>
      </Grid>
    </Grid>
  </Layout>
)

export default Blog
