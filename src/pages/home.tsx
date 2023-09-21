import {
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material"

import Layout from "../components/layout"
import React from "react"
import Sidebar from "../components/sidebar"

const Home = () => (
  <Layout>
    <Grid container alignItems="start" item xs={12} md={3}>
      <Sidebar />
    </Grid>
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      item
      xs={12}
      md={9}
    >
      <Grid item xs={12}>
        <Typography
          color="textPrimary"
          variant="h4"
          component="h4"
          align="center"
          marginTop="12px"
        >
          Experience
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary={
                <Typography
                  color="textPrimary"
                  variant="h6"
                  component="h6"
                  align="center"
                >
                  Senior Frontend Engineer - Gemini
                </Typography>
              }
              secondary={
                <Typography color="textSecondary" align="center">
                  2022 - Present
                </Typography>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <Typography
                  color="textPrimary"
                  variant="h6"
                  component="h6"
                  align="center"
                >
                  Senior Software Engineer - Disney Streaming Services
                </Typography>
              }
              secondary={
                <Typography color="textSecondary" align="center">
                  2019 - 2022
                </Typography>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <Typography
                  color="textPrimary"
                  variant="h6"
                  component="h6"
                  align="center"
                >
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
      </Grid>
      <Grid item xs={12} md={9}>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <Typography
          color="textPrimary"
          variant="h4"
          component="h4"
          align="center"
          marginTop="12px"
        >
          Hobbies
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary={
                <Typography
                  color="textPrimary"
                  variant="h6"
                  component="h6"
                  align="center"
                >
                  Trying new craft beer and checking out breweries
                </Typography>
              }
              secondary={
                <Typography color="textSecondary" align="center">
                  All time favorite is{" "}
                  <Link href="https://www.tiredhands.com/"> Tired Hands </Link>
                </Typography>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <Typography
                  color="textPrimary"
                  variant="h6"
                  component="h6"
                  align="center"
                >
                  Listening to Podcasts
                </Typography>
              }
              secondary={
                <Typography color="textSecondary" align="center">
                  <Link href="https://syntax.fm"> Syntax </Link> and
                  <Link href="https://reactpodcast.simplecast.fm/">
                    {" "}
                    The React Podcast
                  </Link>{" "}
                  are some of my favs!
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
