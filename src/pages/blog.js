import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Paper, Typography } from "@material-ui/core"
import Layout from "../components/layout"
const Blog = () => (
  <Layout>
    <Paper>
      <Typography variant="h5" component="h3">
        Eventually will be sharing my experiences
      </Typography>
      <Typography component="p">
        More to follow...
      </Typography>
    </Paper>
  </Layout>
)

export default Blog
