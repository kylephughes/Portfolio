import 'bootstrap/dist/css/bootstrap.css'

import { Card, CardContent, CardHeader, Divider, Grid, Typography } from '@material-ui/core'

import Layout from '../components/layout'
import React from 'react'
import SEO from '../components/seo'
import projects from '../data/projects.json'

const Projects = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <Grid container direction="column">
        <Grid item container justify="center" xs={12}>
          <Typography variant="h4" color="textPrimary">
            Projects
          </Typography>
        </Grid>
        <Grid item xs={12} className="text-center">
          <Typography color="textPrimary">
            Check out some of the projects I have worked on - some with small groups of engineers
            and some individually!
          </Typography>
        </Grid>
        <Grid container direction="column" item xs={12}>
          {projects.map((project, index) => {
            return (
              <Grid container justify="center" key={index} style={{ paddingBottom: '25px' }}>
                <Grid item xs={12} sm={9}>
                  <Card variant="outlined">
                    <CardContent>
                      <Grid container direction="column">
                        <Grid item xs={12}>
                          <Typography variant="h6" color="textPrimary">
                            {project.title}
                          </Typography>
                        </Grid>
                        <Divider />
                        <Grid item xs={12} style={{ paddingBottom: 12, paddingTop: 12 }}>
                          <Typography color="textPrimary">{project.description}</Typography>
                        </Grid>
                        <Divider />
                        <Grid item xs={12} style={{ paddingTop: 12 }}>
                          <Typography color="textPrimary">Built With : {project.tech}</Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Projects
