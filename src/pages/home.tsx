import { Divider, Grid, Link, List, ListItem, ListItemText, Typography } from '@mui/material'

import Layout from '../components/layout'
import React from 'react'
import Sidebar from '../components/sidebar'

const Home = () => (
  <Layout>
    <Grid container alignItems="center" item xs={12} md={3}>
      <Sidebar />
    </Grid>
    <Grid container justifyContent="center" item xs={12} md={8}>
      <Grid item xs={12} md={9}>
        <Typography color="textPrimary" variant="h4" component="h4" align="center">
          Experience
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary={
                <Typography color="textPrimary" variant="h6" component="h6" align="center">
                  Senior Software Engineer - Disney Streaming Services
                </Typography>
              }
              secondary={
                <Typography color="textSecondary" align="center">
                  2019 - Present
                </Typography>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <Typography color="textPrimary" variant="h6" component="h6" align="center">
                  Software Engineer - Leidos
                </Typography>
              }
              secondary={
                <Typography color="textSecondary" align="center">
                  2014 - 2019
                </Typography>
              }
            />
          </ListItem>
        </List>
        <Divider />
        <Typography pt={4} color="textPrimary" variant="h4" component="h4" align="center">
          Hobbies
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary={
                <Typography color="textPrimary" variant="h6" component="h6" align="center">
                  Trying new craft beer and checking out breweries
                </Typography>
              }
              secondary={
                <Typography color="textSecondary" align="center">
                  All time favorite is <Link href="https://www.tiredhands.com/"> Tired Hands </Link>
                </Typography>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <Typography color="textPrimary" variant="h6" component="h6" align="center">
                  Listening to Podcasts
                </Typography>
              }
              secondary={
                <Typography color="textSecondary" align="center">
                  <Link href="https://syntax.fm"> Syntax </Link> and
                  <Link href="https://reactpodcast.simplecast.fm/"> The React Podcast</Link> are
                  some of my favs!
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  </Layout>
)

export default Home
