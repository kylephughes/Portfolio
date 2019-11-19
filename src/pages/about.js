import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Paper, Typography, Divider } from "@material-ui/core"
import Layout from "../components/layout"
import { Link } from "@material-ui/core"
const About = () => (
  <Layout>
    <Paper>
      <Typography variant="h5" component="h5" align="center">
        Currently a Software Engineer with Disney Streaming Services
      </Typography>
      <Divider />
      <br />
      <Typography align="center">
        In my spare time I like to try out new breweries & distilleries around
        me, follow my sport teams and follow the stock market.
      </Typography>
      <Divider />
      <br/>
      <Typography align="center">
        Some podcasts I enjoy listening to on my commute are
        <Link href="https://syntax.fm"> Syntax {" "} </Link>
        and
        <Link href="https://reactpodcast.simplecast.fm/">
          {" "} The React Podcast
        </Link>
        . Both are great ways to pick up new things on the web or in React. 
        Non tech wise I like listening to Mad Money with Jim Cramer.
      </Typography>
    </Paper>
  </Layout>
)

export default About
