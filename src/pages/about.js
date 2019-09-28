import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import {Paper, Typography} from '@material-ui/core'
import Layout from "../components/layout"
const About = () => (
    <Layout>
           <Paper>
        <Typography variant="h5" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </Paper>
        </Layout>

)

export default About
